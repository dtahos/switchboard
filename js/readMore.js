/* ========================================================================
 * Switchboard: Read More
 * ========================================================================*/
+ function($) {

    $('.sb-revealbutton').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('.sb-opened');
        $(this).siblings('.sb-reveal').slideToggle("fast");
    });

}(jQuery);
