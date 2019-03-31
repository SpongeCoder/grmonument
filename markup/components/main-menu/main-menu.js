let $ = require('jquery');

$(function () {
    const HEADER_HEIGHT = 143;

    let $mainMenu = $('.main-menu'),
        $categoriesListMenu = $('.all-categories-menu'),
        $categoriesMenuBtn = $('.all-categories');

    let onToggleCategoriesMenu = function (e) {
        e.preventDefault();
        $categoriesListMenu.slideToggle(300);
    };

    let onScroll = function () {
        let scrollTop = $(window).scrollTop();

        if (scrollTop >= HEADER_HEIGHT) {
            $mainMenu.addClass('is-fixed');
        } else {
            $mainMenu.removeClass('is-fixed');
        }
    };

    $categoriesMenuBtn.on('click', onToggleCategoriesMenu);
    $(window).on('scroll', onScroll);

    onScroll();
});
