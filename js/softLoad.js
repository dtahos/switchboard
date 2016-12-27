/* ========================================================================
 * Switchboard: Soft Load
 * ========================================================================*/
+ function($) {

    if ($('body').hasClass('._SOFTLOAD')) {
        setTimeout(function() {
            $('body').addClass('._READY');
        }, 500);
    }

}(jQuery);
