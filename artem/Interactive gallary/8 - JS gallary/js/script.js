const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const gallaryImgs = document.querySelectorAll('.gallery-img');

console.log(gallaryImgs);

let currentlySelected = 0;

prevButton.addEventListener('click', function () {
    gallaryImgs[currentlySelected].classList.remove('active');
    currentlySelected--; // currentlySelected = currentlySelected -1;
    gallaryImgs[currentlySelected].classList.add('active');
    nextButton.disabled = false;

    if (currentlySelected === 0) {
        prevButton.disabled = true;
    }
});

nextButton.addEventListener('click', function () {
    gallaryImgs[currentlySelected].classList.remove('active');
    currentlySelected++;
    gallaryImgs[currentlySelected].classList.add('active');
    prevButton.disabled = false;

    if (gallaryImgs.length === currentlySelected + 1) {
        nextButton.disabled = true;
    }
}); 