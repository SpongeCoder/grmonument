let $ = require('jquery');

$(function () {
    let productSlider = '.product-slider__content',
        productSliderNav = '.product-slider-nav__content';

    $(productSlider).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        asNavFor: productSliderNav
    });

    $(productSliderNav).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: productSlider,
        dots: false,
        arrows: false,
        variableWidth: true,
        infinite: true,
        swipeToSlide: true,
        focusOnSelect: true
    });
})

