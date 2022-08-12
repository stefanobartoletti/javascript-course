// --- Variables ---

const defaultResult = 0;
let currentResult = defaultResult;

// --- Helper functions ---

function getUserInput() {
    return parseInt(userInput.value);
}

// --- Math functions ---

function add() {
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult, calcDescription);
}

function subtract() {
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult, calcDescription);
}

function multiply() {
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} * ${enteredNumber}`;
    currentResult = currentResult * enteredNumber;
    outputResult(currentResult, calcDescription);
}

function divide() {
    const enteredNumber = getUserInput();
    const calcDescription = `${currentResult} / ${enteredNumber}`;
    currentResult = currentResult / enteredNumber;
    outputResult(currentResult, calcDescription);
}

// --- Event listeners ---

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)


