function postData(data) {
  $.ajax({
    url: "https://formspree.io/dan@cohelix.co.nz",
    method: "POST",
    data: data,
    dataType: "json"
  });
}

$(document).ready(function () {
	$('.submit-button').on('click', function () {
		var email = $('#email');
		var message = $('#message');

		if (!email) {
			email[0].value = 'not provided';
		}

		if (!message) {
			message[0].value = 'not provided';
		}

		$('.contact-form').hide();
		$('.thanks').show();
		console.log(email);

		postData({
		  email: email[0].value,
		  message: message[0].value
		});
	});
});