const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline-btn");
const modalChoiceBtns = document.getElementById("modal-choice-btns");

setTimeout(function () {
  document.body.classList.add("modal-open");
  overlay.classList.remove("hidden");
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  document.body.classList.remove("modal-open");
  overlay.classList.add("hidden");
});

declineBtn.addEventListener("mouseover", function () {
  modalChoiceBtns.classList.toggle("modal-btns-reverse");
});

consentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const currentFormData = new FormData(consentForm);
  const fullName = currentFormData.get("fullName");

  modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`;

  setTimeout(function () {
    document.getElementById("upload-text").innerText = `
        Making the sale...`;
  }, 1500);

  setTimeout(function () {
    document.getElementById("modal-inner").innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>
    `;
    modalCloseBtn.disabled = false;
  }, 3000);
});
