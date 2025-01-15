// Toggle dropdown
document.querySelectorAll('.dropdown').forEach(dropdown => {
  dropdown.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.toggle('active');
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});