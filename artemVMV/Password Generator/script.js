const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const signs = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const generateBtnEl = document.querySelector(".generate-btn-style")
const firstPassFld = document.getElementById("first-password")
const secondPassFld = document.getElementById("second-password")
const addNUmbersEl = document.getElementById("addNumbers")
const addSignsEl = document.getElementById("addSigns")
const numOfDigits = document.getElementById("password-length")
const errorMsgEl = document.getElementById("error-message")

generateBtnEl.addEventListener("click", function() {

    if (numOfDigits.value) {
        errorMsgEl.textContent = ""
        firstPassFld.textContent = generatePassword(scopeDefinition())
        secondPassFld.textContent= generatePassword(scopeDefinition())
    } else {
        errorMsgEl.textContent = "Please select length"
    }
})

firstPassFld.onclick = function() {
    document.execCommand("copy");
  }
  
firstPassFld.addEventListener("copy", function(event) {
    
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", firstPassFld.textContent);
      event.clipboardData.getData("text")

      alert("Copied")
    }
});

secondPassFld.onclick = function() {
    document.execCommand("copy");
  }
  
secondPassFld.addEventListener("copy", function(event) {
    
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", secondPassFld.textContent);
      event.clipboardData.getData("text")

      alert("Copied")
    }
});

function scopeDefinition() {

    let range = characters
    if (addNUmbersEl.checked == true) {    
        range = range.concat(numbers)
    }
    if (addSignsEl.checked == true) {
        range = range.concat(signs)
    }
    
    return range
}

function randomizer(scope) {
    let randomNumber = ''
    randomNumber = Math.floor(Math.random()*(scope.length))
    return randomNumber
}

function generatePassword(scope) {
    let password = ''
    for (let i=0; i < numOfDigits.value; i++) {
        password += scope[randomizer(scope)]
    }
    return password
}



