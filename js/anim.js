/* ========================================================================
 * Switchboard: Anim
 * ========================================================================*/
+ function($) {

    position = '';

    function isScrolledIntoView(elem) {

        var positionTrig = $(elem).height() - $(elem).height() / 2;

        if (position == 'top')
            positionTrig = '';

        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop = $(elem).offset().top,
            elemBottom = elemTop + (positionTrig);

        return ((elemBottom <= docViewBottom));
    }

    function anim() {
        $('.s-anim').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('.s-animtrig')
            } else {
                $(this).removeClass('.s-animtrig')
            }
        });
    }

    $(window).scroll(function() {
        anim();
    });

    anim();

}(jQuery);
