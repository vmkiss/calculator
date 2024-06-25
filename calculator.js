let num1;
let num2;
let operator;

let firstRow = document.querySelector(".first");
let middleRows = document.querySelectorAll(".middle");
let lastRow = document.querySelector(".last");

// Add cells to last row of calculator
let newCell;

for (let i = 0; i < 4; i++) {
    newCell = document.createElement("div");
    newCell.className = "cell";
    lastRow.appendChild(newCell);
}

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
