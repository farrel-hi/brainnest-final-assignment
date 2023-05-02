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
    if (operator == "+"){
        return addition(firstValue,secondValue)
    }
    else if (operator == "-"){
        return substraction(firstValue,secondValue)
    }
    else if (operator == "/"){
        return multiplication(firstValue,secondValue)
    }
    else if (operator == "*"){
        return division(firstValue,secondValue)
    }
    else{
        errorMessage();
    }
}

console.log(operate(3,9,"+"))
console.log(addition(3,9));
console.log(substraction(3,9));
console.log(multiplication(3,9));
console.log(division(3,9));

