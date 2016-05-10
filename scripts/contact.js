var postData = formspree;

$(document).ready(function () {
	$('.submit-button').on('click', function () {
		var formData = $('.contact-form').serializeArray();
		postData(formData);

		$('.contact-form').hide();
		$('.thanks').show();
	});
});