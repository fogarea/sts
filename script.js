var slides = document.querySelectorAll('.slider__item');
var currentSlide = 0;

function goToSlide(n) {
  slides[currentSlide].className = 'slider__item';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'slider__item slider__item--active';
}
