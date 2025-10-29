// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
    
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
    
    // Dropdown menu functionality
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const dropdown = this.closest('.nav-dropdown');
            const isOpen = dropdown.classList.contains('open');
            
            // Close all other dropdowns
            document.querySelectorAll('.nav-dropdown').forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('open');
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('open', !isOpen);
        });
    });
    
    // Auto-expand dropdown if current page is inside it
    const currentUrl = window.location.pathname;
    const activeNavItem = document.querySelector(`.nav-item[href="${currentUrl}"]`);
    if (activeNavItem) {
        const parentDropdown = activeNavItem.closest('.nav-dropdown');
        if (parentDropdown) {
            parentDropdown.classList.add('open');
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