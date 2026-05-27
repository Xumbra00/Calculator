// Write the initial functions bellow

function add(a, b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

// console.log(add(3,5));
// console.log(subtract(3,5));
// console.log(multiply(3,5));
// console.log(divide(3,5));

// Write bellow the operate function

function operate(operator, a, b) {
    if (operator == "+") {
        return add(a,b);
    }
    else if (operator == "-") {
        return subtract(a,b);
    }
    else if (operator == "*") {
        return multiply(a,b);
    }
    else if (operator == "/") {
        return divide(a,b);
    }
    else {
        console.log("error");
    }
}

console.log(operate("*",2,4));