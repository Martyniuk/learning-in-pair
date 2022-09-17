const charactersObj = {
  letters: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  symbols: [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
  ],
};
let characters = [...charactersObj.letters];

const generatePasswordBtn = document.getElementById("generate-cta");
const optionOne = document.getElementById("option-one");
const optionTwo = document.getElementById("option-two");
const optionOneCopyBtn = document.getElementById("option-one-copy");
const optionTwoCopyBtn = document.getElementById("option-two-copy");
const settingsAccordion = document.getElementsByClassName("settings")[0];
const settingsAccordionBtn =
  document.getElementsByClassName("settings__btn")[0];
const passwordLengthInput = document.getElementById("passwordLength");
const symbolsToggler = document.getElementById("settings__toggle-symbols");
const numbersToggler = document.getElementById("settings__toggle-numbers");

// start - utils fn
function generateRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
// end - utils fn

// main one
function generatePass() {
  let optionOneValue = "";
  let optionTwoValue = "";
  const passwordLength = Number(passwordLengthInput.value) || 15;
  const includeSymbols = symbolsToggler.checked;
  const includeNumbers = numbersToggler.checked;

  if (includeSymbols) {
    characters.push(...charactersObj.symbols);
  } else {
    characters = characters.filter(
      (char) => !charactersObj.symbols.includes(char)
    );
  }
  if (includeNumbers) {
    characters.push(...charactersObj.numbers);
  } else {
    characters = characters.filter(
      (char) => !charactersObj.numbers.includes(char)
    );
  }

  new Array(passwordLength).fill("to fill").forEach((char) => {
    optionOneValue += characters[generateRandomIndex(characters)];
    optionTwoValue += characters[generateRandomIndex(characters)];
  });

  optionOne.textContent = optionOneValue;
  optionTwo.textContent = optionTwoValue;
}

// ...Rest
function copyToClipboardOptionOne() {
  navigator.clipboard.writeText(optionOne.textContent);
}
function copyToClipboardOptionTwo() {
  navigator.clipboard.writeText(optionTwo.textContent);
}
function accordionToggleActive() {
  settingsAccordion.classList.toggle("active");
}

generatePasswordBtn.addEventListener("click", generatePass);
optionOneCopyBtn.addEventListener("click", copyToClipboardOptionOne);
optionTwoCopyBtn.addEventListener("click", copyToClipboardOptionTwo);
settingsAccordionBtn.addEventListener("click", accordionToggleActive);
