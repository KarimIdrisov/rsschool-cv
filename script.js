const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const links = document.querySelectorAll('.header__link');
function toggleActive() {
   burger.classList.toggle('active');
   headerMenu.classList.toggle('active');
}

burger.addEventListener('click', toggleActive);
links.forEach(link => link.addEventListener('click', toggleActive))