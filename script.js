// 1. Create functions for simple operations   
    // add
    // subtract
    // multiply
    // divide


function addOperation(numOne, numTwo) {
    return numOne + numTwo;
}

function subtractOperation(numOne, numTwo) {
    return numOne - numTwo;
}

function multiplyOperation (numOne, numTwo) {
    return numOne * numTwo;
}

function divideOperation (numOne, numTwo) {
    return numOne / numTwo;
}

let numOne;
let numTwo;
let operatorSelector;

function operate () { // will be called by an event clicker listener
    switch (operatorSelector) {
        case "add":
            addOperation(numOne, numTwo);
            break;
    
        case "subtract":
            subtractOperation(numOne, numTwo);
            break;
        case "multiply":
            multiplyOperation(numOne, numTwo);
            break;
        case "divide":
            divideOperation(numOne, numTwo);
}
}