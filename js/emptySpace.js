/* ========================================================================
 * Switchboard: Empty Space
 * ========================================================================*/
 + function($) {

     var emptySpace = $('._emptyspace');

     emptySpace.each(function() {
         var thisEs = $(this),
             esHeight = thisEs.data('height');

         $(this).css('height', esHeight);
     });

 }(jQuery);
