let arrUserInput = [0,"",0]; //format: firstValue, Operator, secondValue
let operationOrder = 0; // 0 = firstValue, 1 = Operator, 2 = secondValue

function errorMessage() {
    throw new Error("There is something wrong, let me fix it first");
}

function addition(firstValue,secondValue) {
    return firstValue+secondValue;
}
function substraction(firstValue,secondValue) {
    return firstValue-secondValue;
}
function multiplication(firstValue,secondValue) {
    return firstValue*secondValue;
}
function division(firstValue,secondValue) {
    return firstValue/secondValue;
}

function operate(firstValue,secondValue,operator) {
    // console.log(`value one: ${firstValue}`);
    // console.log(`operator: ${operator}`);
    // console.log(`value two: ${secondValue}`);
    if (operator == "+"){
        return addition(firstValue,secondValue)
    }
    else if (operator == "-"){
        return substraction(firstValue,secondValue)
    }
    else if (operator == "/"){
        return division(firstValue,secondValue)
    }
    else if (operator == "*"){
        return multiplication(firstValue,secondValue)
    }
    else{
        errorMessage();
    }
}

function addInputNumberValue(newNumberValue, order) {
    if (arrUserInput[order] == 0){
        arrUserInput[order] = newNumberValue;
    }
    else{
        let turnToTextFirst = arrUserInput[order].toString() + newNumberValue.toString() ;
        arrUserInput[order] = parseInt(turnToTextFirst);
    }
}

// addInputNumberValue(9,0);
// console.log(`first input: ${arrUserInput[0]}`);
// addInputNumberValue(4,0);
// console.log(`second input: ${arrUserInput[0]}`);
// addInputNumberValue(2,0);
// console.log(`second input: ${arrUserInput[0]}`);
// addInputNumberValue(1,0);
// console.log(`second input: ${arrUserInput[0]}`);

function clearAllInput(){
    arrUserInput[0] = 0;
    arrUserInput[1] = "";
    arrUserInput[2] = 0;
}

function displayValue(){
    if (operationOrder == 3){
        let resultValue = operate(arrUserInput[0],arrUserInput[2],arrUserInput[1]);
        let displayValueResult = document.getElementById("input");
        let displayMathExpression = document.getElementById("math-expression");
        displayValueResult.innerHTML = resultValue;
        displayMathExpression.innerHTML = `${arrUserInput[0]} ${arrUserInput[1]} ${arrUserInput[2]} =`
        arrUserInput[0] = resultValue;
    }
}

function checkButton(buttonInnerHTML) {
    if(buttonInnerHTML == "/" || buttonInnerHTML == "*" || buttonInnerHTML == "-" ||buttonInnerHTML == "+" ){
        arrUserInput[1] = buttonInnerHTML;
        operationOrder+=1;
    }
    else if(buttonInnerHTML == "="){
        displayValue();

        operationOrder == 0;
    }
    else if (buttonInnerHTML == "CE"){ 
        arrUserInput[operationOrder] = 0;
    }
    else if (buttonInnerHTML == "C"){
        clearAllInput();
    }
    else{
        let newValue = parseInt(buttonInnerHTML);   
        addInputNumberValue(newValue,operationOrder);    
        operationOrder+=1;
    }
}

const btn = document.querySelector('button');

console.log(checkButton("9"));
console.log(checkButton("*"));
console.log(checkButton("3"));
console.log(checkButton("="));


// console.log(btn.length);
// console.log(btn[0].innerHTML);
// console.log(typeof btn[0].innerHTML);
// console.log(typeof btn[5].innerHTML);

// btn.addEventListener('click', () => {
//     let clickValue = 
// })

// console.log(operate(3,9,"+"))
// console.log(addition(3,9));
// console.log(substraction(3,9));
// console.log(multiplication(3,9));
// console.log(division(3,9));

