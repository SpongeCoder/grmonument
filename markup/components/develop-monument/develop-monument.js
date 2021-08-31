import $ from 'jquery';

$(function () {
    let $btn = $('.develop-monument-spoiler');
    let $text = $('.develop-monument__spoiler-text');
    $btn.on('click', function (event) {
        event.preventDefault();
        $text.slideDown(450);
        $(this).prop('disabled', true);
        $(this).animate({
            opacity: 0,
        }, 300);
    });
})
