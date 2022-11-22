const menu = document.querySelector('.header__mob');
const popup = document.querySelector('.popup');


menu.addEventListener('click', showMenu);

function showMenu() {
    menu.classList.toggle('rotate');
    popup.classList.toggle('show');
}