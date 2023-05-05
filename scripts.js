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
    let newFirstValue = parseInt(firstValue); //parseInt rounded integer
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
                displayValueResult.innerHTML = `${arrUserInput[0]}`;
            }
            else{
                displayValueResult.innerHTML = `${arrUserInput[2]}`;
            }
            break;
        case 3:
            displayMathExpression.innerHTML = `${arrUserInput[0]} ${arrUserInput[1]} ${arrUserInput[2]}`;
            displayValueResult.innerHTML = numResult.toString();
            break;
        case 4:
            displayMathExpression.innerHTML = "0";
            displayValueResult.innerHTML = "0";

            operationOrder = 0;
            break;
        case 5:
            displayMathExpression.innerHTML = `${arrUserInput[0]} =`;
            displayValueResult.innerHTML = `${arrUserInput[0]}`;

            operationOrder = 0;
            arrUserInput[0] = "";
            break;
        case 6:
            displayMathExpression.innerHTML = `${arrUserInput[0]} / 0`;
            displayValueResult.innerHTML = `Cannot divide by zero`;

            operationOrder = 3;
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

function backspace(){
    let inputLength = arrUserInput[operationOrder].length;
    let newValue  = arrUserInput[operationOrder].slice(0,inputLength-1);
    
    arrUserInput[operationOrder] = newValue;
}

function checkDecimal(){
    let tempValueCheck = arrUserInput[operationOrder];
    console.log(tempValueCheck.length);
    if (tempValueCheck.length == 0){ //for input: dot; first dot
        addNumber("0.");
    }
    else{
        for (let i=0;i<tempValueCheck.length;i++){
            if (tempValueCheck[i] != "." && i == tempValueCheck.length-1){
                addNumber(".");
            }
            else if (tempValueCheck[i] != "." && i != tempValueCheck.length-1){
                continue
            }
            else{
                break;
            }
        }
    }
    
}

function checkButton(buttonInnerHTML) { //buttonInnerHTML = String
    if(buttonInnerHTML == "/" || buttonInnerHTML == "*" || buttonInnerHTML == "-" ||buttonInnerHTML == "+" ){
        if (operationOrder == 2 && arrUserInput[2] !=""){ //for input: num -> op -> num -> op
            operate(arrUserInput[0],arrUserInput[2],arrUserInput[1]);
            arrUserInput[0] = numResult.toString();
            arrUserInput[1] = buttonInnerHTML;
            arrUserInput[2] = "";
        }
        else if (operationOrder == 2 && arrUserInput[2] ==""){ //for input: num -> op -> op
            arrUserInput[1] = buttonInnerHTML;
        }
        else if (operationOrder == 0 && arrUserInput[0] != ""){ //for input: num->op
            arrUserInput[1] = buttonInnerHTML;
        }
        else if(operationOrder == 0 && arrUserInput[0] == ""){ //for input: op
            arrUserInput[0] = "0";
            arrUserInput[1] = buttonInnerHTML;
        }
        operationOrder=2;
    }
    else if(buttonInnerHTML == "="){
        operationOrder = 3;
        if(arrUserInput[0] != "" && arrUserInput[1] == "" && arrUserInput[2] == ""){ //for input: num -> equal, it shows num = on the math-expression and num on the input
            operationOrder = 5;
        }
        else if(arrUserInput[2] == "0" && arrUserInput[1] == "/"){
            operationOrder = 6;
        }
        else if(arrUserInput[0] != "" && arrUserInput[1] != "" && arrUserInput[2] == ""){ //for input: num -> operator -> equal, it uses the first num as a second num
            arrUserInput[2] = arrUserInput[0];
            operate(arrUserInput[0],arrUserInput[2],arrUserInput[1]);
        }
        else if(arrUserInput[0] != "" && arrUserInput[1] != "" && arrUserInput[1] != ""){ //for input: num -> operator -> num -> equal, the normal way
            operate(arrUserInput[0],arrUserInput[2],arrUserInput[1]);
        }
        else{
            operationOrder = 4;
        }
    }
    else if (buttonInnerHTML == "CE"){ 
        arrUserInput[operationOrder] = "";
    }
    else if (buttonInnerHTML == "C"){
        operationOrder = 4;
        clearAllInput();
    }
    else if (buttonInnerHTML == "BS"){
        backspace();
    }
    else if (buttonInnerHTML == "."){
        checkDecimal();
    }
    else{
        addNumber(buttonInnerHTML);  
    }
}

const btn = document.querySelectorAll('button');
for (let i = 0;i<btn.length;i++){
    btn[i].addEventListener("click", function(){
        let clickValue = btn[i].innerHTML;
        // console.log(arrUserInput[0]);
        // console.log(arrUserInput[1]);
        // console.log(arrUserInput[2]);
        // console.log(`operation Order: ${operationOrder}`);
        checkButton(clickValue);
        displayValue();
        changeValue();
    });
}