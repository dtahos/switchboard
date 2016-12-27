/* ========================================================================
 * Switchboard: Smooth Image Load
 * ========================================================================*/
+ function($) {

    $('img').each(function() {

        var that = $(this);

        if (that.hasClass('.s-smooth')) {
            that.load(function() {
                that.addClass('.s-loaded');
            });
        }

    });

}(jQuery);
