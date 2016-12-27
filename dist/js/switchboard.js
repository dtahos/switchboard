/*!
 * Switchboard v0.0.4
 */

if (typeof jQuery === 'undefined') {
    throw new Error('Hello! Switchboard needs jQuery to run its javascript!');
} else {
    // THE VERSION
    console.log('%cSWITCHBOARD v0.5(dev)', 'background-color:black;font-size:15px;color:#8BC34A;border-left:solid 5px; border-right:solid 5px #8BC34A; #8BC34A;padding:5px 10px;');
}

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

/* ========================================================================
 * Switchboard: Empty Space
 * ========================================================================*/
+ function($) {

    var emptyspace = $('.s-emptyspace');

    emptyspace.each(function() {
        $(this).css('height', $(this).data('height'));
    });

}(jQuery);

/* ========================================================================
 * Switchboard: Hashtag Links
 * ========================================================================*/
+ function($) {

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, {
                    duration: 300,
                    easing: 'swing'
                });
                return false;
            }
        }
    });

}(jQuery);

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

/* ========================================================================
 * Switchboard: The Imager
 * ========================================================================*/
+ function($) {

    function theImager() {
        var theImage = $('.s-theimage'),
            theImagelink = theImage.data('image');
        theImagersize();
        if (theImage.length) {
            if (theImagelink !== undefined) {
                theImage.css('background-image', 'url("' + theImagelink + '")');
            } else {
                console.error('Url of image in the .s-IMAGER is not defined!');
            }
        } else {
            console.error('There is no .s-image element');
        }
    }

    function theImagersize() {
        var header = $('.s--header'),
            theImage = $('.s-theimage'),
            theImager = $('.s-imager'),
            theImageHeight = theImage.data('height'),
            imagerHeight = $(window).height(),
            percentageHeight = 100;

        if (!header.hasClass('.s-absolute') && !header.hasClass('.s-fixed'))
            imagerHeight -= header.height();

        if (theImageHeight !== undefined)
            percentageHeight = theImageHeight;

        theImager.css('height', (imagerHeight * percentageHeight) / 100);
    }

    if ($(".s-imager").length)
        theImager();

    $(window).resize(theImagersize);

}(jQuery);
