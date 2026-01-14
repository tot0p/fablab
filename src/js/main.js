// Dark mode functionality
(function() {
    // Get saved theme or default to system preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    // If no saved theme, let CSS prefers-color-scheme handle it
})();

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    // Dark mode toggle
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            let newTheme;
            
            if (currentTheme === 'dark') {
                newTheme = 'light';
            } else if (currentTheme === 'light') {
                newTheme = 'dark';
            } else {
                // No manual theme set, check system preference
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                newTheme = prefersDark ? 'light' : 'dark';
            }
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
    
    // Function to initialize dropdown functionality
    function initializeDropdowns() {
        const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
        
        dropdownToggles.forEach(toggle => {
            // Remove existing listeners to avoid duplicates
            toggle.removeEventListener('click', handleDropdownClick);
            toggle.addEventListener('click', handleDropdownClick);
        });
    }
    
    // Dropdown click handler
    function handleDropdownClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const dropdown = this.closest('.nav-dropdown');
        const isOpen = dropdown.classList.contains('open');
        
        // Find parent dropdown container (if any)
        const parentDropdownContent = dropdown.parentElement.closest('.nav-dropdown-content');
        
        // Close all sibling dropdowns (at the same level)
        const siblingContainer = parentDropdownContent || dropdown.parentElement;
        siblingContainer.querySelectorAll(':scope > .nav-dropdown').forEach(d => {
            if (d !== dropdown) {
                d.classList.remove('open');
                // Also close all nested dropdowns within siblings
                d.querySelectorAll('.nav-dropdown').forEach(nested => {
                    nested.classList.remove('open');
                });
            }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('open', !isOpen);
    }
    
    // Initialize dropdowns
    initializeDropdowns();
    
    // Prevent dropdown closing when clicking on nav-items inside dropdowns
    document.querySelectorAll('.nav-dropdown-content .nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    
    // Mobile menu toggle
    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        });
    }
    
    // Auto-expand dropdown if current page is inside it
    const currentUrl = window.location.pathname;
    const activeNavItem = document.querySelector(`.nav-item[href="${currentUrl}"]`);
    if (activeNavItem) {
        // Find all parent dropdowns and open them
        let currentElement = activeNavItem;
        while (currentElement) {
            const parentDropdown = currentElement.closest('.nav-dropdown');
            if (parentDropdown) {
                parentDropdown.classList.add('open');
                currentElement = parentDropdown.parentElement;
            } else {
                break;
            }
        }
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Decode the URL to handle accented characters
            const href = this.getAttribute('href');
            const decodedHref = decodeURIComponent(href);
            
            try {
                const target = document.querySelector(decodedHref);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL hash without jumping
                    history.pushState(null, null, href);
                }
            } catch (e) {
                // If selector is still invalid, try using getElementById
                const id = decodedHref.substring(1);
                const target = document.getElementById(id);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    history.pushState(null, null, href);
                }
            }
        });
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu and dropdowns
    if (e.key === 'Escape') {
        document.querySelector('.sidebar')?.classList.remove('open');
        document.querySelectorAll('.nav-dropdown.open').forEach(dropdown => {
            dropdown.classList.remove('open');
        });
    }
});