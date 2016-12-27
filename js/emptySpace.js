/* ========================================================================
 * Switchboard: Empty Space
 * ========================================================================*/
+ function($) {

    var emptyspace = $('.s-emptyspace');

    emptyspace.each(function() {
        $(this).css('height', $(this).data('height'));
    });

}(jQuery);
