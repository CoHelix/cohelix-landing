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
		if ($('#email')[0].checkValidity()) {
			var formData = $('.contact-form').serializeArray();
			postData(formData);

			$('.contact-form').hide();
			$('.thanks').show();
		}
	});
});