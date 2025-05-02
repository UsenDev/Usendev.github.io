document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');

  // Toggle the menu visibility when the hamburger menu is clicked
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle the 'active' class
  });

  // Close the menu when a navigation link is clicked
  navMenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      navMenu.classList.remove('active'); // Hide the menu
    }
  });
});
