import $ from 'jQuery';

$(function () {
    let $burger = $('.header__burger');
    let $menu = $('.main-menu');

    $burger.on('click', function (event) {
        event.preventDefault();
        $menu.addClass('is-show');
    })
})
