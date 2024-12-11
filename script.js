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
const displayMain = document.querySelector("#displayMain");

function getInput() {
    return displayMain.textContent;
}

function getInputAndClear() {
    let input = displayMain.textContent;
    displayMain.textContent = "";
    return input;
}

function appendInput(input) {
    if (displayMain.textContent === "0") displayMain.textContent = input;
    else displayMain.textContent += input;
}

function appendZero() {
    if (displayMain.textContent !== "0") displayMain.textContent += "0";
}

function deleteLast() {
    if (displayMain.textContent.length === 1) displayMain.textContent = 0;
    else displayMain.textContent = displayMain.textContent.slice(0, -1);
}

function deleteAll() {
    displayMain.textContent = 0;
}

// Check if point doesn't exists in displayMain and append
function appendPoint() {
    if (displayMain.textContent === "") displayMain.textContent += "0.";
    else if (!displayMain.textContent.includes(".")) displayMain.textContent += ".";
}

let xInput = "";
let yInput = "";
let operatorInput = "";

function onOperatorButton(operator) {
    onEqualsButton();
    xInput = displayMain.textContent;
    displayMain.textContent = "";
    operatorInput = operator;
    updateSecondaryDisplay();
}

function onEqualsButton() {
    if (xInput !== "" && operatorInput !== "" && displayMain.textContent !== "") {
        let answer = calculate(xInput, displayMain.textContent, operatorInput);
        displayMain.textContent = answer;
        xInput = "";
        operatorInput = "";
        displaySecondary.textContent = "";
    }
}

let displaySecondary = document.querySelector("#displaySecondary");

function updateSecondaryDisplay() {
    let operatorSymbol = "";
    switch (operatorInput) {
        case "add":
            operatorSymbol = "+";
            break;
        case "subtract":
            operatorSymbol = "−";
            break
        case "multiply":
            operatorSymbol = "×";
            break;
        case "divide":
            operatorSymbol = "÷"
            break;
        case "modulo":
            operatorSymbol = "%";
            break;
    }
    displaySecondary.textContent = xInput + " " + operatorSymbol;
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

