/* 1. Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console.
add
subtract
multiply
divide
2. A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.
3. Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
*/

let num1;
let num2;
let operator;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "ERROR";
    }
}

function operate(num1, num2, operator) {
    if (operator === "plus") {
        return add(num1, num2);
    }
    if (operator === "minus") {
        return subtract(num1, num2);
    }
    if (operator === "multiply") {
        return multiply(num1, num2);
    }
    if (operator === "divide") {
        return divide(num1, num2);
    }
}

console.log(operate(5, 6, "multiply"));