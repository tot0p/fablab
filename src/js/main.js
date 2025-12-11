// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
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
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
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