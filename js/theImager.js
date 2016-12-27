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
