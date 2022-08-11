const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

/**
Template literal, equivalent to
let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/

let calculationDescription = `(${ defaultResult } + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
