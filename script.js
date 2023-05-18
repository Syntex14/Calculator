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
        case "-":
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

// display portion of the project
    // 1. Display Num on the display div
        // a. create displayNumMainString variable
            // i. create operatorMainString variable
        // b. create a click event listener for button container

            // i. if value is equal to number, call conditional
                // conditional : 0 - 9, e.target.value must exist
                    // if so, displayNumMainString += e.target.value
    
            // ii. if value is equal to operator, call conditional
                // conditional: + OR - OR % OR *, e.target.must exist
                    // if so, operatorMainString += e.target.value
                    // input empty string into displayMainNumString

            // iii. if value is equal to AC, call conditional
                // clear out display variables - displayNumMainString and operatorMainString using empty quotes
                    // for displayNumMainString input a zero into the string to display to user that the fields have been cleared.

            // iv. if value is equal to equal sign, call operate function 
                
        // c. display displayNumMainString onto display
            // select display div
            // create an element, p
            // append displayNumMainString onto p (textContent, innerHTML)
            // append p on display div

    const calcButtonListener = document.querySelector(".button-containers");
        calcButtonListener.addEventListener("click", e => {
            let displayNumMainString;
            let operatorMainString;
            if () // may have to take advantage of implicit coercion in this case
            


        });
