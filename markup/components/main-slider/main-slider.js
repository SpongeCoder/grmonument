let $ = require('jquery');

$(function () {
    let $slider = $('.main-slider'),
        settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            accessibility: false,
            fade: true,
            cssEase: 'linear',
            rows: 0 // FIX-BAGS: https://github.com/kenwheeler/slick/issues/3207
        };

    $slider.slick(settings);
});
