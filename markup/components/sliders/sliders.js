let $ = require('jquery');

class Slider {
    constructor(selector, settings) {
        this.$slider = $(selector);
        this.$tab = this.$slider.find('.sliders__tab');
        this.$content = this.$slider.find('.sliders__content');
        this.$contentWrapp = this.$slider.find('.sliders__content-wrapp');
        this.$btnLeft = this.$slider.find('.sliders__left');
        this.$btnRight = this.$slider.find('.sliders__right');
        this.settings = settings;
        this.$currentActive;
        this.timerId;

        this.onSwitchSlider = this.onSwitchSlider.bind(this);
        this.animateSwitch = this.animateSwitch.bind(this);
    }

    init() {
        this.$tab.on('click', this.onSwitchSlider);
        this.settings.nextArrow = this.$btnRight;
        this.settings.prevArrow = this.$btnLeft;
        this.$currentActive = this.$content.filter('.is-active').slick(this.settings);
    }

    animateSwitch(event, slick) {
        slick.$slider.addClass('is-active');
        this.$contentWrapp.removeClass('is-animate');
    };

    onSwitchSlider(e) {
        let $current = $(e.currentTarget),
            nameTab = $current.data('content'),
            $nextActive = this.$slider.find(`.sliders__content[data-slider=${nameTab}]`);

        if (!$current.hasClass('is-active')) {
            this.$tab.removeClass('is-active');
            $current.addClass('is-active');
        }

        if (nameTab !== this.$currentActive.data('slider')) {
            this.$contentWrapp.addClass('is-animate');

            if (this.timerId) {
                clearTimeout(this.timerId);
            }

            this.timerId = setTimeout(() => {
                this.$currentActive.slick('unslick');
                this.$content.removeClass('is-active');

                $nextActive.on('init', this.animateSwitch);

                this.$currentActive = $nextActive.slick(this.settings);
            }, 300);
        }

        e.preventDefault();
    };
}

$(function () {
    const settingsBestsellers = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        arrows: true,
        accessibility: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
        nextArrow: null,
        prevArrow: null,
        rows: 0 // FIX-BAGS: https://github.com/kenwheeler/slick/issues/3207
    };
    const settingsNew = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: true,
        accessibility: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        variableWidth: true,
        nextArrow: null,
        prevArrow: null,
        rows: 0 // FIX-BAGS: https://github.com/kenwheeler/slick/issues/3207
    };

    let sliderBestsellers = new Slider('.sliders--bestsellers', settingsBestsellers);
    let sliderNew = new Slider('.sliders--new', settingsNew);
    let sliderSale = new Slider('.sliders--sale', settingsNew);

    sliderBestsellers.init();
    sliderNew.init();
    sliderSale.init();
});
