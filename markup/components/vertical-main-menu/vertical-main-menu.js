import $ from 'jquery';

$(function () {
    var $spoiler = $('.vertical-main-menu__head');

    $spoiler.on('click', function (e) {
        e.preventDefault();
        var $list = $(this).next('.vertical-main-menu__list');

        if (!$(this).hasClass('is-active')) {
            $spoiler
                .filter('.is-active')
                .toggleClass('is-active')
                .next('.vertical-main-menu__list')
                .slideToggle()
        }

        $(this).toggleClass('is-active');
        $list.slideToggle();
    });
});
