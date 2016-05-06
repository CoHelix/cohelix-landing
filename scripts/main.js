function postData(data) {
  $.ajax({
    url: "https://formspree.io/dan@cohelix.co.nz",
    method: "POST",
    data: data,
    dataType: "json"
  });
}

$(document).ready(function () {
  var email;

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

  $('.signup-button').on('click', function () {
    if ($('#email')[0].checkValidity()) {
      email = $('#email').serializeArray();

      postData({
        email: email[0].value,
        message: 'signup'
      });

      $('.email-form').hide(); 
      //$('.survey-form').show();
      $('.thanks').show();
    } else {
      // TODO - Add email validation messaging
    }
  });

  $('#email').keydown(function (e) {
    var key = e.which;
    if (key == 13) {
      $('.signup-button').click();
    }
  });

  $('.survey-button').on('click', function () {
    postData({
      email: email,
      message: 'survey'
    });

    $('.survey-form').hide();
    $('.thanks').show();
  });

});
