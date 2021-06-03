const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const gallaryImgs = document.querySelectorAll('.gallery-img');

let currentlySelected = 0;

prevButton.addEventListener('click', function () {
    gallaryImgs[currentlySelected].classList.remove('active');
    currentlySelected--; // currentlySelected = currentlySelected -1;
    gallaryImgs[currentlySelected].classList.add('active');
    nextButton.removeAttribute('disabled');

    if (currentlySelected === 0) {
        prevButton.setAttribute('disabled', 'disabled');
    }
});

nextButton.addEventListener('click', function () {
    gallaryImgs[currentlySelected].classList.remove('active');
    currentlySelected++;
    gallaryImgs[currentlySelected].classList.add('active');
    prevButton.removeAttribute('disabled');

    if (gallaryImgs.length === currentlySelected + 1) {
        nextButton.setAttribute('disabled', 'disabled');
    }
}); 
