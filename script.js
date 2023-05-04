let arrUserInput = ["","",""]; //format: firstValue, Operator, secondValue
let userFirstInput = "";
let userSecondInput = "";
let userOperatorInput = "";
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
    // if (arrUserInput[order] == 0){
    //     arrUserInput[order] = newNumberValue;
    // }
    // else{
    //     let turnToTextFirst = arrUserInput[order].toString() + newNumberValue.toString() ;
    //     arrUserInput[order] = parseInt(turnToTextFirst);
    // }
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

function addNewInput(newValue, order){ 
    console.log(userFirstInput);
    console.log(typeof newValue);
    console.log(newValue);
    if (order == 0){
        console.log(`koko`);
        userFirstInput = userFirstInput + newValue;
    }
    else if (order == 2){
        userSecondInput = userSecondInput + newValue;
    }
    else{
        errorMessage();
    }

    // let combineValue = ;
    // arrValue.push(newValue);
    // for (let i=0;arrValue.length;i++){
    //     arrValue[i]
    // }
}

function displayValue(){
    let displayValueResult = document.getElementById("input");
    let displayMathExpression = document.getElementById("math-expression");
    if (operationOrder == 3){
        // let resultValue = operate(arrUserInput[0],arrUserInput[2],arrUserInput[1]);
        let resultValue = operate(parseInt(userFirstInput),parseInt(userSecondInput),userOperatorInput);
        displayValueResult.innerHTML = resultValue;
        // displayMathExpression.innerHTML = `${arrUserInput[0]} ${arrUserInput[1]} ${arrUserInput[2]} =`
        displayMathExpression.innerHTML == `${userFirstInput} ${userOperatorInput} =`;
        displayValueResult.innerHTML == resultValue.toString;
        // arrUserInput[0] = resultValue;
    }
    else if (operationOrder == 0){
        // displayValueResult.innerHTML == `${arrUserInput[0]}`;
        displayValueResult.innerHTML == userFirstInput;
    }
    else if (operationOrder == 1){
        // displayValueResult.innerHTML == `${arrUserInput[0]} ${arrUserInput[1]}`;
        displayValueResult.innerHTML == `${userFirstInput} ${userOperatorInput}`;
    }
    else{
        errorMessage();
    }
}

function checkButton(buttonInnerHTML) {
    if(buttonInnerHTML == "/" || buttonInnerHTML == "*" || buttonInnerHTML == "-" ||buttonInnerHTML == "+" ){
        operationOrder+=1;
        // arrUserInput[1] = buttonInnerHTML;
        userOperatorInput = buttonInnerHTML;
        displayValue();
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
        // let newValue = parseInt(buttonInnerHTML);   
        addInputNumberValue(newValue,operationOrder);  
        // displayValue();  
        // addNewInput(buttonInnerHTML,operationOrder);
        displayValue();
    }
}

const btn = document.querySelectorAll('button');
// console.log(btn);
for (let i = 0;i<btn.length;i++){
    btn[i].addEventListener("click", function(){
        let clickValue = btn[i].innerHTML;
        console.log(clickValue);
        checkButton(clickValue);
    });
}

// console.log(checkButton("9"));
// // console.log(checkButton("9"));
// console.log(checkButton("*"));
// console.log(checkButton("3"));
// console.log(checkButton("="));


// console.log(btn.length);
// console.log(btn[0].innerHTML);
// console.log(typeof btn[0].innerHTML);
// console.log(typeof btn[5].innerHTML);

// btn.addEventListener('click', () => {
//     let clickValue = btn.innerHTML;
//     console.log(btn);
// })

// console.log(operate(3,9,"+"))
// console.log(addition(3,9));
// console.log(substraction(3,9));
// console.log(multiplication(3,9));
// console.log(division(3,9));

