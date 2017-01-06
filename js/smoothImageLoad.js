/* ========================================================================
 * Switchboard: Smooth Image Load
 * ========================================================================*/
+ function($) {

    $('img').each(function() {

        var that = $(this);

        if (that.hasClass('.sb-smooth')) {
            that.load(function() {
                that.addClass('.sb-loaded');
            });
        }

    });

}(jQuery);
