function initializeNavbar() {
  // Toggle dropdown
  document.querySelectorAll('.dropdown').forEach(dropdown => {
      // Remove any existing event listeners
      dropdown.removeEventListener('click', toggleDropdown);
      // Add new event listener
      dropdown.addEventListener('click', toggleDropdown);
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.getElementById('sidebar');
  
  if (menuToggle && sidebar) {
      // Remove any existing event listeners
      menuToggle.removeEventListener('click', toggleMenu);
      // Add new event listener
      menuToggle.addEventListener('click', toggleMenu);
  }
}

function toggleDropdown(e) {
  e.preventDefault();
  this.classList.toggle('active');
}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

// Initialize navbar when the script loads (for non-dynamically loaded content)
document.addEventListener('DOMContentLoaded', initializeNavbar);