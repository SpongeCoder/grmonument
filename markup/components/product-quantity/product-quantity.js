require('jquery');

$(function () {
    const MAX_COUNT = 99;
    const MIN_COUNT = 1;
    const selectorParent = '.product-quantity';
    const selectorMinus = '.product-quantity__minus';
    const selectorPlus = '.product-quantity__plus';
    const selectorCount = '.product-quantity__count';

    const $minus = $(selectorMinus);
    const $plus = $(selectorPlus);
    const $count = $(selectorCount);
    const onClickPlus = (e) => {
        e.preventDefault();

        const $input = $(e.currentTarget).parent(selectorParent).find(selectorCount);
        let value = Number($input.val());

        value += 1;

        if (value > MAX_COUNT) {
            value = MAX_COUNT;
        }

        if (isNaN(value)) {
            value = MIN_COUNT;
        }

        $input.val(value);
    };
    const onClickMinus = (e) => {
        e.preventDefault();

        const $input = $(e.currentTarget).parent(selectorParent).find(selectorCount);
        let value = Number($input.val());

        value -= 1;

        if (value < MIN_COUNT || isNaN(value)) {
            value = MIN_COUNT;
        }

        $input.val(value);
    };
    const onChangeCount = (e) => {

    };

    $minus.on('click', onClickMinus);
    $plus.on('click', onClickPlus);
    $count.on('change', onChangeCount);
});
