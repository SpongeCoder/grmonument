let $ = require('jquery');

// js-spoiler
$( function () {

    function tSpoiler(blockName, speed) {
        let $spoilerBlock = $( '[data-show-spoiler=' + blockName + ']' );

        speed = ( speed !== 'undefined' ) ? speed : 500;

        let open = function () {
            $( '[data-spoiler=' + blockName + ']' ).addClass( 'is-active' );
            $spoilerBlock.slideToggle( speed, function () {
                $(this).removeClass( 'is-hide' ).addClass('is-show').removeAttr( 'style' );
            });
        };

        let close = function () {
            $( '[data-spoiler=' + blockName + ']' ).removeClass( 'is-active' );
            $spoilerBlock.slideToggle( speed, function () {
                $(this).addClass( 'is-hide' ).removeClass('is-show').removeAttr( 'style' );
            });
        };

        if ( $spoilerBlock.length ) {
            let hasClass = $spoilerBlock.hasClass('is-hide');

            if (hasClass) {
                open();
            } else {
                close();
            }
        }
    }

    function toggleSpoiler( domElement, e ) {
        let nodeName = domElement.nodeName,
            blockName = $( domElement ).data( 'spoiler' ),
            speed = $( domElement ).data( 'speed' );

        if ( nodeName === 'A' ) {
            e.preventDefault();
            e.stopPropagation();
        }

        // Для Label заменям на change у checkbox'а
        if ( nodeName === 'LABEL' ) {
            let forId = $( domElement ).attr( 'for' );
            let $input = $( '#' + forId );

            if ( $input.attr( 'type' ) === 'checkbox' ) {
                $input.on('change', function () {
                    tSpoiler( blockName, speed );
                });

                $( domElement ).removeClass( 'js-spoiler' );
                return;
            }
        }

        tSpoiler( blockName, speed );
    }

    $('.js-spoiler').on('click', function (e) {
        toggleSpoiler( this, e );
    });

} );
