// --- Variables ---

const defaultResult = 0;
let currentResult = defaultResult;

// --- Helper functions ---

function getUserInput() {
    return parseInt(userInput.value);
}

function createDescription(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

// --- Math functions ---

function add() {
    const enteredNumber = getUserInput();
    initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createDescription('+', initialResult, enteredNumber)
}

function subtract() {
    const enteredNumber = getUserInput();
    initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createDescription('-', initialResult, enteredNumber)
}

function multiply() {
    const enteredNumber = getUserInput();
    initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createDescription('*', initialResult, enteredNumber)
}

function divide() {
    const enteredNumber = getUserInput();
    initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createDescription('/', initialResult, enteredNumber)
}

// --- Event listeners ---

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)


