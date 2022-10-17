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

function calculateResult(calcType) {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let mathOperator;

    if (calcType === 'ADD') {
        currentResult += enteredNumber; // shorthand for currentResult = currentResult + enteredNumber;
        mathOperator = '+';
    } else if (calcType === 'SUBTRACT'){
        currentResult -= enteredNumber; // shorthand for currentResult = currentResult - enteredNumber;
        mathOperator = '-';    
    } else if (calcType === 'MULTIPLY'){
        currentResult *= enteredNumber; // shorthand for currentResult = currentResult - enteredNumber;
        mathOperator = '*';    
    } else if (calcType === 'DIVIDE'){
        currentResult /= enteredNumber; // shorthand for currentResult = currentResult - enteredNumber;
        mathOperator = '/';
    }

    createDescription(mathOperator, initialResult, enteredNumber)
    writeToLog(calcType, initialResult, enteredNumber, currentResult)
}

function add() {
    calculateResult('ADD')
}

function subtract() {
    calculateResult('SUBTRACT')
}

function multiply() {
    calculateResult('MULTIPLY')
}

function divide() {
    calculateResult('DIVIDE')
}

// --- Event listeners ---

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)


