let $ = require('jquery');

$(function () {
    let $sandwich = $('.js-sandwich'),
        $menu = $('.js-menu'),
        $menuClose = $('.js-menu-close');

    let openMenu = function (event) {
        event.preventDefault();

        $menu.toggleClass('is-active');
        $menuClose.toggleClass('is-active');
        $sandwich.toggleClass('is-active');
    };

    let closeMenu = function (event) {
        event.preventDefault();

        $menu.removeClass('is-active');
        $menuClose.removeClass('is-active');
        $sandwich.removeClass('is-active');
    };

    $sandwich.on('click', openMenu);
    $menuClose.on('click', closeMenu);
});
