const openModalBtn = document.getElementsByClassName("open-modal")[0];
const closeModalBtn = document.getElementsByClassName("close-modal")[0];

const overlayForModal = document.getElementsByClassName("overlay")[0];

openModalBtn.addEventListener("click", function () {
  overlayForModal.style.display = "block";
});

closeModalBtn.addEventListener("click", function () {
  overlayForModal.style.display = "none";
});
