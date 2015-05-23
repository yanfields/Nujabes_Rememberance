$(window).load(function() {
  $('.flexslider').flexslider({
    controlNav: false,
    directionNav: false,
    prevText: "",
    nextText: ""
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    $('.music_section').each(function(i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({
          'opacity': '1'
        }, 500);
      }
    });
  });
});