let $ = require('jquery');

$(function () {
    let $burger = $('.header__burger');
    let $menu = $('.mobile-menu');

    $burger.on('click', function (event) {
        event.preventDefault();
        $menu.removeClass('is-close');
    })
})
