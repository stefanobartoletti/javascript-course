// --- Variables ---

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// --- Helper functions ---

function getUserInput() {
    return parseInt(userInput.value);
}

function createDescription(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationId, prevResult, operationNum, newResult) {
    const logEntry = {
        operation: operationId,
        prevValue: prevResult,
        number: operationNum,
        result: newResult
    }
    logEntries.push(logEntry)
    console.log(logEntries)
}

// --- Math functions ---

function add() {
    const enteredNumber = getUserInput();
    initialResult = currentResult;
    currentResult += enteredNumber; // shorthand for currentResult = currentResult + enteredNumber;
    createDescription('+', initialResult, enteredNumber)
    writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract() {
    const enteredNumber = getUserInput();
    initialResult = currentResult;
    currentResult -= enteredNumber; // shorthand for currentResult = currentResult - enteredNumber;
    createDescription('-', initialResult, enteredNumber)
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

function multiply() {
    const enteredNumber = getUserInput();
    initialResult = currentResult;
    currentResult *= enteredNumber; // shorthand for currentResult = currentResult * enteredNumber;
    createDescription('*', initialResult, enteredNumber)
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide() {
    const enteredNumber = getUserInput();
    initialResult = currentResult;
    currentResult /= enteredNumber; // shorthand for currentResult = currentResult / enteredNumber;
    createDescription('/', initialResult, enteredNumber)
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

// --- Event listeners ---

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)


