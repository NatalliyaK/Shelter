import './css/index.scss';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

new Swiper('.swiper', {

        // Optional parameters
        direction: 'horizontal',
    
        loop: true,
//
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    slidesPerView: 3,

    // Default parameters
    spaceBetween: 90,
//     // Responsive breakpoints
//     breakpoints: {
//         220: {
//             slidesPerView: 1,
//             },
//         // when window width is >= 320px
//         320: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//         },
//         // when window width is >= 480px
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//         },
//     },
    }
);

