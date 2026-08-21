// Basic variables definition
let A = undefined;
let B = undefined;
let newValue = undefined;
let operator = "";

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

// Tests
console.log(operate("*",2,4));
console.log(operate("-",3,1)); 

// newValue update
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log('something clicked.');
        console.log('clicked: ' + event.target.textContent);
        newValue = (event.target.textContent);
        console.log('newValue: ' + newValue);
    });
});


// Write bellow the function that takes the operate return to output it
function output(x) {
    console.log(operate(x));
}



// We want the calculator to be able to calculate for the solution automatically before equal (preview)