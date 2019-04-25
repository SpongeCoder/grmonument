import $ from 'jquery';
import Swiper from 'swiper';

$(function () {
    var mySwiper = new Swiper('.special-offers .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 38,
        grabCursor:  true,
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            // when window width is <= 320px
            // 320: {
            //     slidesPerView: 1,
            //     spaceBetween: 20
            // },

            1023: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    })
})
