import $ from 'jquery';

$(function () {
    let $feedbackBtn = $('.js-feedback-modal-btn');
    let $feedbackModal = $('.js-feedback-modal');
    let $feedbackModalClose = $('.js-feedback-modal .close-btn');
    let $feedbackModalOverlay = $('.js-feedback-modal .modal-block__overlay');

    let onCloseModal = function (event) {
        event.preventDefault();
        $feedbackModal.fadeOut(300)
    }
    let onOpenModal = function (event) {
        event.preventDefault();
        $feedbackModal.fadeIn(300)
    }

    $feedbackBtn.on('click', onOpenModal);
    $feedbackModalClose.on('click', onCloseModal);
    $feedbackModalOverlay.on('click', onCloseModal);

    $(document).on('af_complete', function (event, response) {
        $feedbackModal.fadeOut(300)
    });
})
