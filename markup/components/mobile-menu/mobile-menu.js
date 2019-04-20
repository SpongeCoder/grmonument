let $ = require('jquery');

$(function () {
    let $menu = $('.mobile-menu');
    let $closeMenu = $('.mobile-menu__close');

    $closeMenu.on('click', function (event) {
        event.preventDefault();
        $menu.addClass('is-close');
    })
})
