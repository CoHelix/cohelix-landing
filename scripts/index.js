$(document).ready(function () {
  $(window).on('scroll', function (event) { 
    var scrollDistance = window.pageYOffset;
    var nav = $('.navbar-fixed');
    
    if (scrollDistance > 500) {
      nav.show();
    } else {
      if (nav.css('display') != 'hidden') {
        nav.hide();
      }
    }
    
  });

  $(".learn-more").click(function() {
    $('html,body').animate({
        scrollTop: $("#manage").offset().top - 100},
        'slow');
  });
});
