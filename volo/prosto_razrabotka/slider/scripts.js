window.onload = function () {
  let positionOnLine = 0;
  const slidesToShow = 1;

  const container = document.querySelector(".slider-container");
  const containerWidth = container.getBoundingClientRect().width; // containerWidth should be given
  const sliderLine = document.querySelector(".slider-line");
  const items = document.querySelectorAll(".slider-item");
  const btnPrev = document.querySelector(".btn-prev");
  const btnNext = document.querySelector(".btn-next");
  const totalItems = items.length;
  const itemWidth = containerWidth / slidesToShow;

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });

  btnPrev.addEventListener("click", function () {
    positionOnLine += itemWidth;
    sliderLine.style.transform = `translateX(${positionOnLine}px)`;

    checkBtnDisabled();
  });

  btnNext.addEventListener("click", function () {
    positionOnLine -= itemWidth;
    sliderLine.style.transform = `translateX(${positionOnLine}px)`;

    checkBtnDisabled();
  });

  checkBtnDisabled();

  function checkBtnDisabled() {
    btnPrev.disabled = positionOnLine === 0;
    btnNext.disabled =
      Math.abs(positionOnLine) === (totalItems - 1) * itemWidth;
  }
};
