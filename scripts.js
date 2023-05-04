let arrUserInput = ["","",""]; //format: firstValue, Operator, secondValue
let numResult = "";
let operationOrder = 0; // 0 = firstValue, 1 = Operator, 2 = secondValue

function errorMessage() {
    throw new Error("There is something wrong, let me fix it first");
}

function addition(firstValue,secondValue) {
    numResult = firstValue+secondValue;
}
function substraction(firstValue,secondValue) {
    numResult = firstValue-secondValue;
}
function multiplication(firstValue,secondValue) {
    numResult = firstValue*secondValue;
}
function division(firstValue,secondValue) {
    numResult = firstValue/secondValue;
}

function operate(firstValue,secondValue,operator) { //firstValue & SecondValue still String
    if (operationOrder == 3){    
        let newFirstValue = parseInt(firstValue);
        let newSecondValue = parseInt(secondValue);
        if (operator == "+"){
            addition(newFirstValue,newSecondValue)
        }
        else if (operator == "-"){
            substraction(newFirstValue,newSecondValue)
        }
        else if (operator == "/"){
            division(newFirstValue,newSecondValue)
        }
        else if (operator == "*"){
            multiplication(newFirstValue,newSecondValue)
        }
        else{
            errorMessage();
        }
    }
}

function clearAllInput(){
    arrUserInput[0] = "";
    arrUserInput[1] = "";
    arrUserInput[2] = "";
    numResult = "";
}

function displayValue(){
    let displayValueResult = document.getElementById("input");
    let displayMathExpression = document.getElementById("math-expression");
    switch (operationOrder) {
        case 0:
            if(arrUserInput[operationOrder] == ""){
                displayValueResult.innerHTML = "0";
            }
            else{
                displayValueResult.innerHTML = `${arrUserInput[0]}`;
            }
            break;
        case 1:
            displayMathExpression.innerHTML = `${arrUserInput[0]} ${arrUserInput[1]}`;
            break;
        case 2:
            if (arrUserInput[2] == ""){
                displayMathExpression.innerHTML = `${arrUserInput[0]} ${arrUserInput[1]}`;
                displayValueResult.innerHTML = "0";
            }
            else{
                displayValueResult.innerHTML = `${arrUserInput[2]}`;
            }
            break;
        case 3:
            displayMathExpression.innerHTML = `${arrUserInput[0]} ${arrUserInput[1]} ${arrUserInput[2]}`;
            displayValueResult.innerHTML = numResult.toString();

            // operationOrder = 0;
            break;
        case 4:
            displayMathExpression.innerHTML = "0";
            displayValueResult.innerHTML = "0";

            operationOrder = 0;
            break;
        default:
            errorMessage();
    }
}

function addNumber(newValue){ 
    arrUserInput[operationOrder] = arrUserInput[operationOrder] + newValue;
}

function changeValue(){
    if (operationOrder == 3){
        arrUserInput[0] = numResult.toString();
        arrUserInput[1] = "";
        arrUserInput[2] = "";
        numResult = "";
        operationOrder = 0;
    }
}

function checkButton(buttonInnerHTML) { //buttonInnerHTML = String
    if(buttonInnerHTML == "/" || buttonInnerHTML == "*" || buttonInnerHTML == "-" ||buttonInnerHTML == "+" ){
        arrUserInput[1] = buttonInnerHTML;
        operationOrder=2;
    }
    else if(buttonInnerHTML == "="){
        operationOrder = 3;
        operate(arrUserInput[0],arrUserInput[2],arrUserInput[1]);
    }
    else if (buttonInnerHTML == "CE"){ 
        arrUserInput[operationOrder] = "";
    }
    else if (buttonInnerHTML == "C"){
        operationOrder = 4;
        clearAllInput();
    }
    else{
        addNumber(buttonInnerHTML);  
    }
}

const btn = document.querySelectorAll('button');
for (let i = 0;i<btn.length;i++){
    btn[i].addEventListener("click", function(){
        let clickValue = btn[i].innerHTML;
        console.log(arrUserInput[0]);
        console.log(arrUserInput[1]);
        console.log(arrUserInput[2]);
        console.log(`operation Order: ${operationOrder}`);
        checkButton(clickValue);
        displayValue();
        changeValue();
    });
}