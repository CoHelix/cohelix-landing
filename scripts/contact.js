var postData = formspree;

$(document).ready(function () {
	$('.submit-button').on('click', function () {
		if ($('#email')[0].checkValidity()) {
			var formData = $('.contact-form').serializeArray();
			postData(formData);

			$('.contact-form').hide();
			$('.thanks').show();
		}
	});
});