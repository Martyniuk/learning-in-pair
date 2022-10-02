const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", function () {
  overlay.classList.add("overlay-active");
});

closeModalBtn.addEventListener("click", function () {
  overlay.classList.remove("overlay-active");
});
