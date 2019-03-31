require('jquery');

$(function () {
    // const HEIGHT_SHOW = 400;

    let $scrollUp = $('.scroll-up');
    /* let onScroll = function () {
        let scrollTop = $(window).scrollTop();

        if (scrollTop >= HEIGHT_SHOW) {
            $scrollUp.addClass('is-show');
        } else {
            $scrollUp.removeClass('is-show');
        }
    } */
    let onScrollUp = function (e) {
        e.preventDefault();

        $("html, body").stop().animate({scrollTop: 0}, 500, 'swing');
    }

    $scrollUp.on('click', onScrollUp);
    // $(window).on('scroll', onScroll);

    // onScroll();
});
