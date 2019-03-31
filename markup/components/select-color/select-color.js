let $ = require('jquery');

$(function () {
    let $clear = $('.js-select-color-clear');

    function clearSelect() {
        let $parent = $(this).parents('.select-color'),
            $input = $parent.find('input');

        $input.prop('checked', false);
    }

    $clear.on('click', clearSelect);
});
