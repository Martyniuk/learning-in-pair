window.onload = automateSlide();

const slides = document.getElementsByClassName("carousel-item");
const prevBtn = document.getElementById("carousel-button-prev");
const nextBtn = document.getElementById("carousel-button-next");
const currentSlideElement = document.getElementById("current-slide");

let slidePosition = 0;
const totalSlides = slides.length;

prevBtn.addEventListener("click", moveToPrevSlide);
nextBtn.addEventListener("click", moveToNextSlide);

function moveToPrevSlide() {
  hideAllSlides();
  if (slidePosition === 0) {
    slidePosition = slides.length - 1;
  } else {
    slidePosition -= 1;
  }

  let currentSlide = slides[slidePosition];
  currentSlide.classList.add("carousel-item-visible");
  updateCurrentSlide();
}

function moveToNextSlide() {
  hideAllSlides();
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition += 1;
  }

  let currentSlide = slides[slidePosition];
  currentSlide.classList.add("carousel-item-visible");
  updateCurrentSlide();
}

function hideAllSlides() {
  for (let s of slides) {
    s.classList.remove("carousel-item-visible");
    s.classList.add("carousel-item-hidden");
  }
}

function automateSlide() {
  setInterval(() => moveToNextSlide(), 5000);
}

function updateCurrentSlide() {
  currentSlideElement.textContent = `Current slide: ${slidePosition + 1}`;
}
