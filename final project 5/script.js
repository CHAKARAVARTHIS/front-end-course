const menuToggle = document.getElementById('menu-toggle');
const menus = document.getElementById('menus');

menuToggle.addEventListener('click', () => {
  menus.classList.toggle('show');
});
