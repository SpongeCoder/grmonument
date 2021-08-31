import $ from 'jquery';

$(function () {
    let $feedbackBtn = $('.feedback-btn button');
    let $feedbackModal = $('.feedback-modal');
    let $feedbackModalClose = $('.feedback-modal .close-btn');
    let $feedbackModalOverlay = $('.feedback-modal__overlay');

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
