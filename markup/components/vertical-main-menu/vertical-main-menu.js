let $ = require('jquery');

$(function () {
    var $spoiler = $('.vertical-main-menu__head');

    $spoiler.on('click', function (e) {
        e.preventDefault();
        var $list = $(this).next('.vertical-main-menu__list');

        $(this).toggleClass('is-active');
        $list.slideToggle();
    });
});
