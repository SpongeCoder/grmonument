import $ from 'jQuery';

$(function () {
    let $menu = $('.main-menu');
    let $closeMenu = $('.main-menu .close-btn');

    $closeMenu.on('click', function (event) {
        event.preventDefault();
        $menu.removeClass('is-show');
    })
})
