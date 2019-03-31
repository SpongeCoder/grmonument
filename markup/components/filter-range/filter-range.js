let $ = require('jquery');

$(function () {
    let classLabel = '.js-filter-range-label',
        classParent = '.filter-range',
        classRange = '.js-filter-range',
        $rangeSlider = $(classRange),
        setting = {
            tooltip: 'hide'
        };

    let changeText = function ($label, value1, value2) {
        let label = $label.data('label'),
            units = $label.data('units'),
            text = '';

        text = label + ': <b>' + value1 + ' ';
        text += units + ' - ' + value2 + ' ' + units + '</b>';

        $label.html(text);
    };

    let changeSlider = function (event) {
        let value1 = event.value.newValue[0],
            value2 = event.value.newValue[1],
            $label = $(this).parents(classParent).find(classLabel);

        changeText($label, value1, value2);
    };

    $rangeSlider.slider(setting);
    $rangeSlider.on('change', changeSlider);
});
