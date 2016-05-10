var postData = formspree;

$(document).ready(function () {
	$('.submit-button').on('click', function () {
		var formData = $('.contact-form').serializeArray();

		var fieldsArePopulated = formData.every(function (element) {
			return element.value;
		});

		if (fieldsArePopulated) {
			postData(formData);
			$('.contact-form').hide();
			$('.thanks').show();
		} else {
			if ($('.error-msg').length == 0) {
				$('.contact-form').append('<p class="error-msg">Please complete all fields.</p>');
			}
		}
	});
});