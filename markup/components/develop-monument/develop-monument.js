let $ = require('jquery');

$(function () {
    let $btn = $('.develop-monument-spoiler');
    let $text = $('.develop-monument__spoiler-text');
    $btn.on('click', function (event) {
        event.preventDefault();
        $text.show(450);
        $(this).hide();
    });
})
