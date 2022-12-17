const images = document.getElementsByClassName("slider-item");

let current = 0;
let totalSlides = images.length;

const sliderBtnLeft = document.getElementById("slider-left-cta");
const sliderBtnRight = document.getElementById("slider-right-cta");

sliderBtnRight.addEventListener("click", moveSlideToRight);
sliderBtnLeft.addEventListener("click", moveSlideToLeft);

function moveSlideToLeft() {
  hideAllSlides();

  if (current <= 0) {
    current = totalSlides - 1;
  } else {
    current -= 1;
  }

  let currentImage = images[current];
  currentImage.classList.add("active");
}

function moveSlideToRight() {
  hideAllSlides();

  if (current >= totalSlides - 1) {
    current = 0;
  } else {
    current += 1;
  }

  let currentImage = images[current];
  currentImage.classList.add("active");
}

function hideAllSlides() {
  for (let img of images) {
    img.classList.remove("active");
  }
}
