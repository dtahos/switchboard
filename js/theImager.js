/* ========================================================================
 * Switchboard: The Imager
 * ========================================================================*/
+ function($) {

    function theImager() {
        var theImage = $('.sb-theimage'),
            theImagelink = theImage.data('image');
        theImagersize();
        if (theImage.length) {
            if (theImagelink !== undefined) {
                theImage.css('background-image', 'url("' + theImagelink + '")');
            } else {
                console.error('Url of image in the .sb-IMAGER is not defined!');
            }
        } else {
            console.error('There is no .sb-image element');
        }
    }

    function theImagersize() {
        var header = $('.sb--header'),
            theImage = $('.sb-theimage'),
            theImager = $('.sb-imager'),
            theImageHeight = theImage.data('height'),
            imagerHeight = $(window).height(),
            percentageHeight = 100;

        if (!header.hasClass('.sb-absolute') && !header.hasClass('.sb-fixed'))
            imagerHeight -= header.height();

        if (theImageHeight !== undefined)
            percentageHeight = theImageHeight;

        theImager.css('height', (imagerHeight * percentageHeight) / 100);
    }

    if ($(".sb-imager").length)
        theImager();

    $(window).resize(theImagersize);

}(jQuery);
