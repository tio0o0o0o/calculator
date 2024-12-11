// 1. Create function that takes in x, y, and operator, and executes the corresponding calculation
function calculate(x, y, operator) {
    x = Number(x);
    y = Number(y);
    switch(operator) {
        case "add":
            return x + y;
        case "subtract":
            return x - y;
        case "multiply":
            return x * y;
        case "divide":
            if (isFinite(x / y)) return x / y;
            return 0;
        case "modulo":
            if (isNaN(x % y)) return 0;
            return x % y;
    }
}

// 2. Create functions for the buttons
const display = document.querySelector("#display");

function getInput() {
    return display.textContent;
}

function getInputAndClear() {
    let input = display.textContent;
    display.textContent = "";
    return input;
}

function appendInput(input) {
    if (display.textContent === "0") display.textContent = input;
    else display.textContent += input;
}

function appendZero() {
    if (display.textContent !== "0") display.textContent += "0";
}

function deleteLast() {
    if (display.textContent.length === 1) display.textContent = 0;
    else display.textContent = display.textContent.slice(0, -1);
}

function deleteAll() {
    display.textContent = 0;
}

// Check if point doesn't exists in display and append
function appendPoint() {
    if (display.textContent === "") display.textContent += "0.";
    else if (!display.textContent.includes(".")) display.textContent += ".";
}

let xInput = "";
let yInput = "";
let operatorInput = "";

function onOperatorButton(operator) {
    xInput = display.textContent;
    display.textContent = "";
    operatorInput = operator;
}

function onEqualsButton() {
    if (xInput !== "" && operatorInput !== "" && display.textContent !== "") {
        let answer = calculate(xInput, display.textContent, operatorInput);
        display.textContent = answer;
        xInput = "";
        operatorInput = "";
    }
}

// 3. Add event listeners to buttons
const calculator = document.querySelector("#calculator");

calculator.addEventListener("click", (event) => {
    switch (event.target.id) {
        case "one": 
            appendInput("1");
            break;
        case "two": 
            appendInput("2");
            break;
        case "three": 
            appendInput("3");
            break;
        case "four": 
            appendInput("4");
            break;
        case "five": 
            appendInput("5");
            break;
        case "six": 
            appendInput("6");
            break;
        case "seven": 
            appendInput("7");
            break;
        case "eight": 
            appendInput("8");
            break;
         case "nine": 
            appendInput("9");
            break;
         case "zero":
            appendZero();
            break;
        case "point": 
            appendPoint();
            break;
        case "c":   
            deleteLast();
            break;
        case "ac":
            deleteAll();
            break;
        case "add":
            onOperatorButton("add");
            break;
        case "subtract":
            onOperatorButton("subtract");
            break;
        case "multiply":
            onOperatorButton("multiply");
            break;
        case "divide":
            onOperatorButton("divide");
            break;
        case "modulo":
            onOperatorButton("modulo");
            break;
        case "equals":
            onEqualsButton();
            break;
    }
});

