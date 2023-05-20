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
let resultantNum;


function operate (operatorSelector) { // will be called by an event clicker listener
    switch (operatorSelector) {
        case "+":
            resultantNum = addOperation(numOne, numTwo);
            break;
    
        case "-":
            resultantNum = subtractOperation(numOne, numTwo);
            break;
        case "*":
            resultantNum = multiplyOperation(numOne, numTwo);
            break;
        case "/":
            resultantNum = divideOperation(numOne, numTwo);
}
}

// display portion of the project
    // 1. Display Num on the display div
        // a. create displayNumMainString variable in global space
            // i. in addEventListener, set e.target.innerText = to displayNumMainString
            // ii. create operatorMainString variable

        // b. create a click event listener for button container

            // i. create conditionals 
                // a. if e.target.className = button-single-number
                    // display = e.target.innerText;
                // b. if e.target.className = button-single-operator
                    // display = ""
                    // operatorMainString += e.target.innerText;
                // c. if e.target.className = button-single-equal
                    // 
                
            // iii. if value is equal to AC, call conditional
                // clear out display variables - displayNumMainString and operatorMainString using empty quotes
                    // for displayNumMainString input a zero into the string to display to user that the fields have been cleared.

            // iv. if value is equal to equal sign, call operate function 
                
        // c. display displayNumMainString onto display
            // select display div
            // create an element, p
            // append displayNumMainString onto p (textContent, innerHTML)
            // append p on display div

    

    let displayNumMainString = "";
    let operatorMainString = "";

    const calcButtonListener = document.querySelector(".button-containers");
        calcButtonListener.addEventListener("click", e => {
            let buttonClassName = e.target.className;
            let buttonInnerText = e.target.innerText;
            if (buttonClassName === "button-single button-single-number") {
                displayNumMainString += buttonInnerText;
                displayNum();
            }   
            else if (buttonClassName === "button-single button-single-operator") {
                getDisplayDigitsNumOne();
                resetDisplayString();
                operatorMainString = buttonInnerText;
            }
            else if (buttonClassName === "button-single button-single-clear") {
                clearCalculator();
            }
            else if (buttonClassName === "button-single button-single-equal-sign") {
                if (stopEqualSign()) return;

                getDisplayDigitsNumTwo();
                resetDisplayString();
                operate(operatorMainString);
                displayResultant();
                
            }
        
           
        });

    function resetDisplayString() {
        displayNumMainString = "";
    }
    
    function displayNum() {
        const getDisplay = document.getElementById("display");
        getDisplay.textContent = `${displayNumMainString}`;
    }

    function clearCalculator() {
        displayNumMainString = "0";
        operatorMainString = "";
        displayNum();
        resetDisplayString();
    }

    function getDisplayDigitsNumOne() {
        numOne = +displayNumMainString;
    }

    function getDisplayDigitsNumTwo() {
        numTwo = +displayNumMainString;
    }

    function displayResultant() {
        displayNumMainString = resultantNum;
        numOne = resultantNum;
        displayNum();

    }
    function stopEqualSign() {
        if (+displayNumMainString === resultantNum) { return true;}
    }
