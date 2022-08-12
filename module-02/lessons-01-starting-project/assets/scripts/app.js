const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

currentResult = add(1, 2);

/**
Template literal, equivalent to
let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/

let calculationDescription = `(${ defaultResult } + 10) * 3 / 2 - 1`;

console.log( calculationDescription)

outputResult(currentResult, calculationDescription);
