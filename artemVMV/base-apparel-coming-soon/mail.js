
let inputEl = document.getElementById("email")
let messageEl = document.getElementById("message");


function statusDisplay() {

    const isEmailValid = emailValidation(inputEl.value);
 
    if (isEmailValid) {    
        messageEl.textContent = "Your subscription succesfully registered.";
        inputEl.value= "";
        } else {
        messageEl.textContent = "Email is not valid";
        inputEl.value = "";
    }
    console.log(messageEl.textContent)
}

function emailValidation(email) {
    const validSymbols = /^([a-z\d\.]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/gmi;
    let validationStatus = validSymbols.test(email);
    console.log(validationStatus)
    return validationStatus

  
}

