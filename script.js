const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const links = document.querySelectorAll('.header__link');
const body = document.querySelector('body');
function toggleActive() {
   burger.classList.toggle('active');
   headerMenu.classList.toggle('active');
   body.classList.toggle('lock');
}

burger.addEventListener('click', toggleActive);
links.forEach(link => link.addEventListener('click', toggleActive))