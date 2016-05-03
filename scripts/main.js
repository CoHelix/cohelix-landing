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

  $('.signup-button').on('click', function () {
    if ($('#email')[0].checkValidity()) {
      email = $('#email').serializeArray();

      postData({
        email: email[0].value,
        message: 'signup'
      });

      $('.call-to-action').hide();
      $('.survey').show();
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

    $('.survey').hide();
    $('.thanks').show();
  });

});