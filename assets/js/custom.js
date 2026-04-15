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

    // services slider 
      var swiper = new Swiper(".ts-services-active", {
      slidesPerView: 3,
      spaceBetween: 24,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });








})(jQuery);


