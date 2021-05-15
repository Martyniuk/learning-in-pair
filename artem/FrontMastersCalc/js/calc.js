let runningTotal = 0;
let buffer = "0"; // everythig that is on the screen will be --> string
let previousOperator = null;
const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        // this is not a number
        handleSymbol(value);
    } else {
        // this is a number 
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    // if (symbol === 'C') {
    //     buffer = '0';
    //     runningTotal = 0;
    // }
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer.substring(0, buffer.length - 1);
            }
            break;
        case '÷':
        case '×':
        case '-':
        case '+':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {

    if (buffer === '0') {
        //do nothing
        return;
    }

    const inBuffer = parseInt(buffer); // or +buffer (do the same)

    if (runningTotal === 0) {
        runningTotal = inBuffer;
    } else {
        flushOperation(inBuffer); // will actually do the Math
    }

    previousOperator = symbol; // storage for symbols

    buffer = '0';
}

function flushOperation(inBuffer) {

    if (previousOperator === '+') {
        runningTotal += inBuffer;
    } else if (previousOperator === '-') {
        runningTotal -= inBuffer;
    } else if (previousOperator === '÷') {
        runningTotal /= inBuffer;
    } else {
        runningTotal *= inBuffer;
    }
    console.log('runningTotal', runningTotal)
}

function handleNumber(numberString) {

    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }

}

function init() {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function (event) {
            buttonClick(event.target.innerText);
        });
}

init();