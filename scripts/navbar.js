function initializeNavbar() {
  // Toggle dropdown
  document.querySelectorAll('.dropdown').forEach(dropdown => {
      const toggleButton = dropdown.querySelector('.nav-item');
      
      
      
      // Add new event listener to toggle button
      toggleButton.addEventListener('click', (e) => {
          e.preventDefault();
          dropdown.classList.toggle('active');
      });

      // Add click event listener to dropdown items
      const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
      dropdownItems.forEach(item => {
          item.addEventListener('click', (e) => {
              // Allow normal navigation for dropdown items
              e.stopPropagation(); // Prevent the dropdown toggle from catching this click
          });
      });
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.getElementById('sidebar');
  
  if (menuToggle && sidebar) {
      menuToggle.removeEventListener('click', toggleMenu);
      menuToggle.addEventListener('click', toggleMenu);
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
          document.querySelectorAll('.dropdown').forEach(dropdown => {
              dropdown.classList.remove('active');
          });
      }
  });
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

// Initialize navbar when the script loads
document.addEventListener('DOMContentLoaded', initializeNavbar);

