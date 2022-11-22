import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';
import '../css/index.scss';

import './action';

new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        220: {
            slidesPerView: 1,
            },
        // when window width is >= 320px
        500: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 45,
        },
    },
});
