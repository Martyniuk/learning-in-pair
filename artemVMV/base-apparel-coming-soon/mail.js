
let inputEl = document.getElementById("email")
let messageEl = document.getElementById("message");
let fieldElementStyles = document.querySelector(".input-field").style;
let messageStyles = document.querySelector(".message").style;

let statusDisplay = () => {

    const isEmailValid = emailValidation(inputEl.value);
  
    if (isEmailValid) {    
        messageEl.textContent = "Your subscription succesfully registered.";
        fieldElement.border = "1px solid hsl(0, 36%, 70%)";
        messageSt.color = "green";
        inputEl.value = "";
        } else {
        messageEl.textContent = "Email is not valid";
        messageSt.color = "red";
        fieldElement.border = "2px solid hsl(0, 93%, 68%)";
        inputEl.value = "";
    }
}

let  emailValidation = (email) => {
    const validSymbols = /^([a-z\d\.]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/gmi;
    let validationStatus = validSymbols.test(email);
    console.log(validationStatus)
    return validationStatus
}

