(function($) {
    jQuery.fn.loopThis = function() {

        var duration1 = 500;
        var duration2 = 2500;
        var runThis = {
            repeatThis: function() {
                $('.loopThis').animate({
                    opacity: 1
                }, duration1, function() {
                    $(this).animate({
                        opacity: 0
                    }, duration2, runThis.repeatThis());
                });
            }
        };
        runThis.repeatThis();
    };
})(jQuery);

$('.loopThis').loopThis();