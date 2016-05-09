var formspree = function (data) {
  $.ajax({
    url: "https://formspree.io/dan@cohelix.co.nz",
    method: "POST",
    data: data,
    dataType: "json"
  });
}
