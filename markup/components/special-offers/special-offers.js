import $ from 'jquery';
import Swiper from 'swiper';

$(function () {
    new Swiper('.special-offers .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 38,
        grabCursor:  true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.special-offers .swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        breakpoints: {
            1023: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
            },
            625: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: true,
            }
        }
    })
})
