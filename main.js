var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconBar = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click', function () {
  menu.classList.toggle('active');
  if (iconMenu.getAttribute("src") == 'imagens/menu.png') {
    iconMenu.setAttribute("src", "imagens/close.png");
  } else {
    iconMenu.setAttribute("src", "imagens/menu.png");
  }

});