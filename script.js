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


function operate (operator) { // will be called by an event clicker listener
    switch (operator) {
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

    

    let operatorMainString = "";
    let equalSignCheck = false;

    const calcButtonListener = document.querySelector(".button-containers");
        calcButtonListener.addEventListener("click", e => {
            let buttonClassName = e.target.className;
            let buttonInnerText = e.target.innerText;
            if (buttonClassName === "button-single button-single-number") {
                digitLogicPathway(buttonInnerText, operator);
                
            }   
            else if (buttonClassName === "button-single button-single-operator") { 
               operator.operatorPathWay(buttonInnerText, operator);

            }
            else if (buttonClassName === "button-single button-single-clear") {
                clearCalculator();
            }
            else if (buttonClassName === "button-single button-single-equal-sign") {
                if (equalSignCheck === true) return;
                stopEqualSign();
                numTwo = operator.getDigits();
                operate(operatorMainString);
                display.resetDisplay();
                display.displayString = resultantNum;
                display.display();
                numOne = resultantNum;
                operatorMainString = "";
                middleOperationsCheck = false;
            }

    
        // when I click the equal sign, what do I need the conditional to do?
            // get numTwo
            // do operation using operatorMainString
            // reset the display
            // Equal displayString to the resultantNum
            // display the resultant num
            // reset OperatorMainString
            // reset MiddleOperationsCheck
            
           
        });


    let display = {
        displayString: "",
        display: displayNum,
        resetDisplay: resetDisplayString,
    }

    let operator = {
        tempOperatorString: "",
        operatorPathWay: operatorLogic,
        resetDisplay: resetDisplayString,
        getDigits: getDigit,
        displayResult: displayResultant,
        
    

    }

    function resetDisplayString() {
        display.displayString = "";
    }
    
    function displayNum() {
        const getDisplay = document.getElementById("display");
        getDisplay.textContent = `${display.displayString}`;
    }

    function clearCalculator() {
        display.displayString = "0";
        operator.tempOperatorString = "";
        operatorMainString = "";
        numOne = 0;
        numTwo = 0;
        resultantNum = 0;
        middleOperationsCheck = false;
        displayNum();
        resetDisplayString();
    }

    function getDigit() {
        return +display.displayString;
    }

    function displayResultant() {
        display.displayString = resultantNum;
        numOne = resultantNum;
        resetDisplayString();
        displayNum();

    }
    function stopEqualSign() {
        if (!equalSignCheck) {
            equalSignCheck = true;
        }
    }


function operatorLogic (operator, operatorObj) {
    if (operatorMainString === "") {
        let resultantOperator = operatorSelectionPartOne(operator);
        operatorObj.tempOperatorString = resultantOperator;
            // why isn't operator.tempOperatorString not updating?
                // reduanct code
       
    }

    else if (operatorMainString !== "") {
        numTwo = operatorObj.getDigits();
        operatorObj.tempOperatorString = operatorSelectionPartOne(operator);
        operate(operatorMainString);
        display.resetDisplay();
        display.displayString = resultantNum;
        display.display();
        numOne = resultantNum;
        operatorMainString = "";
        middleOperationsCheck = false;
    }
    // store D2
    // call operate 
    // reset display
    // show display of result
    // numOne = result
    // need to get new operator into calculator
        // operator.tempOperatorString
            // then need to use operatorSelectionPartOne just in case user wants to change operator
}




function operatorSelectionPartOne (tempOperatorStorage) {
    let tempOperator = "";
   
        function operatorSelector() {
             tempOperator = tempOperatorStorage;
        }
        operatorSelector();
    return tempOperator;
    }

// to do 5/26
    // 1. check if digit one and operator fully work
        // e.g. if we can process digit one and operator
    // 2. start working on digit 2 and related processes
        // e.g. what functions, conditionals, or objects do we need to complete this part of the project
    

// digit 2
    // for event clicker conditional
        // function digitLogicPathway
    // digitLogicPathway
     // create a conditional
        // D1, op => digit 2
        // D2 , op ! => digit 1
            //digitLogicPartOne, digit 1
                // display.displayString += buttonInnerText
                // display.display();
            //digitLogicPartTwo, digit 2
                // create a flag variable that checks to see if the needed functions have already been run once before adding digit two to display 
                    // flag variable = middleOperationsCheck = false;
                    // function middleOperations
                        // conditional : if(!middleOperationsCheck) 
                            // numOne = display.display
                            // operatorMainString = tempOperatorString;
                            // display.resetDisplay;
                        // middleOperationsCheck = true;
                // display.displayString += buttonInnerText
                // display.display();

let middleOperationsCheck = false;

function digitLogicPathway (digitString, operatorObj) {
    if (operatorObj.tempOperatorString === "") {
        display.displayString += digitString;
        display.display();
    }

    // middle operations is never reached as the conditional for it isn't reached
    // middle operations needs to happen in the middle of these two conditionals.
    // the issue I'm having is that how can we tell if the user is done with inputting digits into the calculator?
    // we can instead use tempOperatorString
    // if the user is done with inputting digits, the next step is an operator

    else if(operatorObj.tempOperatorString !== "") { 
        middleOperations();
        display.displayString += digitString;
        display.display();
    }
}

function middleOperations() {
        if (!middleOperationsCheck) {
            numOne = operator.getDigits();
            operatorMainString = operator.tempOperatorString;
            display.resetDisplay();
            middleOperationsCheck = true;
            equalSignCheck = false;
        }
}

