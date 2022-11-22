const menu = document.querySelector('.header__mob');
const popup = document.querySelector('.popup');
const learnMore = document.querySelector('.swiper-slide-button');
const meanPopup = document.createElement('div');

menu.addEventListener('click', showMenu);

function showMenu() {
    menu.classList.toggle('rotate');
    popup.classList.toggle('show');
}

// learnMore.addEventListener('click', showPopup);
//
// const meanContent = function showPopup() {
//     let card = document.createElement('div');
//     let imageCreate = document.createElement('img');
//     let name = document.createElement('h3');
//     let animal = document.createElement('p');
//     let desc = document.createElement('p');
// }
//
// meanPopup.innerHTML = meanContent;