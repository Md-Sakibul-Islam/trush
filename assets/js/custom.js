(function ($) {
    "use strict"


    // data bg img
    $("[data-bg-img]").each(function () {
        $(this).css({
            "background-image": "url(" + $(this).attr("data-bg-img") + ")",
            "background-repeat": "no-repeat"
        });
    });

 
    //data bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });









})(jQuery);


