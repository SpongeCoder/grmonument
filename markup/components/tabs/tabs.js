$(function () {
    let $tabs = $('.tabs__item');

    $tabs.on('click', function (e) {
        e.preventDefault();
        let $this = $(this),
            active = $this.hasClass('is-active'),
            selector = $this.data('selector'),
            index = $this.data('index'),
            $allTabs = $('.tabs__item[data-index="' + index + '"]'),
            $allBlock = $('[data-tabs-index="' + index + '"]' ),
            $selector = $('[data-tabs-selector="' + selector + '"]');

        // Если активная вкладка
        if (active) {
            return;
        }

        $allTabs.removeClass('is-active');
        $allBlock.hide().removeClass('is-show');

        $selector.show().addClass('is-show');
        $this.addClass('is-active');
    });

});
