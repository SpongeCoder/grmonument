let $ = require('jquery');

$('.js-favorite').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
});
