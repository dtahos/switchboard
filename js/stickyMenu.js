/* ========================================================================
 * Switchboard: Sticky Menu
 * ========================================================================*/
+ function($) {

    var scroll;

    mode = 'normal';

    function stickyMenu(mode) {
        var header = $('.s--header'),
            nav = header.scrollTop() + header.height(),
            elementClass = '',
            stuckClass = '.s-stuck';

        if (header.data('element-class') !== undefined) {
            elementClass = $('.' + header.data('element-class'));

            if (elementClass.length)
                nav = elementClass.offset().top;

        } else {
            elementClass = header;
        }

        if (mode == 'revealOnScrollUp') {
            if (scroll < lastTop && ($(this).scrollTop() > nav)) {
                header.addClass(stuckClass);
            } else {
                header.removeClass(stuckClass);
            }
        } else {

            if ($(this).scrollTop() > nav) {
                header.addClass(stuckClass);
            } else {
                header.removeClass(stuckClass);
            }

        }
    }

    var lastTop = 0;

    $(window).scroll(function() {
        scroll = $(this).scrollTop();
        stickyMenu(mode);
        lastTop = scroll;
    });
    stickyMenu();

}(jQuery);
