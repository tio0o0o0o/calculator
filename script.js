// 1. Create function that takes in x, y, and operator, and executes the corresponding calculation
function calculate(x, y, operator) {
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

// 2. Create variables to store input data;
let xInput = 0;
let yInput = 0;
let operatorInput = 0;

// 3. Create functions to get and append input from display
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

// Check if point doesn't exists in display and append
function appendPoint() {
    if (display.textContent === "") display.textContent += "0.";
    else if (!display.textContent.includes(".")) display.textContent += ".";
}

// 4. Add event listeners to buttons
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
    }
});

