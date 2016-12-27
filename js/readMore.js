/* ========================================================================
 * Switchboard: Read More
 * ========================================================================*/
+ function($) {

    $('.s-revealbutton').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('.s-opened');
        $(this).siblings('.s-reveal').slideToggle("fast");
    });

}(jQuery);
