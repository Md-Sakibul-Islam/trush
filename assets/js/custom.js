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

  // Image popup
  $('.ts-image-popup').magnificPopup({
    type: 'image'
    // other options
  });

  // video popup
  $('.ts-video-popup').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
      },
      srcAction: 'iframe_src',
    }
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


  // Client slider 
  var swiper = new Swiper(".ts-client-active", {
    slidesPerView: 6,
    spaceBetween: 80,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




})(jQuery);


