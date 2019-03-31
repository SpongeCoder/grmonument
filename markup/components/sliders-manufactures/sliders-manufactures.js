let $ = require('jquery');

$(function () {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        arrows: true,
        accessibility: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
        nextArrow: null,
        prevArrow: null,
        rows: 0 // FIX-BAGS: https://github.com/kenwheeler/slick/issues/3207
    };

    $('.sliders-manufactures')
        .find('.sliders-manufactures__content')
        .slick(settings);
});
