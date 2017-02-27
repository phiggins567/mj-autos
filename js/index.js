function initMap() {
  var bravallenRd = {
    lat: 55.0434806,
    lng: -6.4926723
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: bravallenRd,
  });
  var marker = new google.maps.Marker({
    position: bravallenRd,
    map: map,
    text: "test",
    fontSize: 35,
  });
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 6000);
}

