// Basic variables definition
let newValue = undefined;

// focus on input at loading and disable space
const field = document.querySelector('input');
field.focus();
field.addEventListener('keydown', (event) => {
    if (event.key === ' ' || event.code === 'Space') {
        event.preventDefault();
    }
})

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
// console.log(operate("*",2,4));
// console.log(operate("-",3,1)); 

// newValue update
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log('something clicked.');
        console.log('clicked: ' + event.target.textContent);
        newValue = (event.target.textContent);
        console.log('newValue: ' + newValue);
        const dp = document.querySelector('input');
        if (event.target.textContent === '=' || event.target.textContent === 'AC' || event.target.textContent === 'DEL') {
            // condition to equal, it doesn't change
            let expression = dp.value;
        } else if (newValue === "+" || newValue === "×" || newValue === "-" || newValue === "/") {
            // If count reach 2, it calculates the expression
            dp.value += event.target.textContent;
            operatorCount();
        } else {
            // Add clicked value to display
            dp.value += event.target.textContent; 
        }
        field.focus(); // keep the focus even after clicking
    });
});


// Write bellow the function that takes the operate return to output it
function output(x) {    
    const typed = document.querySelector('input');
    let str = typed.value;
    if (/^[0-9+\-*/\s.×]+$/.test(str)) {
        const trailMatch = str.match(/([+\-\*×\/])\s*$/);
        const trail = trailMatch ? trailMatch[1] : ""; // Condition in cas if trail is empty
        str = str.replace(/×/g, '*'); // replace the sign x with *. The /g stands for global search. It replace all of the signs
        str = str.replace(/[\+\-\*×\/]\s*$/, ""); // delete last operator e.g "3+3+" will be "3+3"
        let result = new Function(`return ${str}`)(); 
        result = Number(result.toFixed(5)); // Round result to the 5th decimal
        result = result + trail;
        console.log(result);
        return result;
    } else {
        console.log("invalid or dangerous input");
    }
}

// When equal or enter is pressed
function showResult() {
    const display = document.querySelector('input');
    const result = output();
    display.value = result;
}
const eq = document.querySelector('#equal');
eq.addEventListener('click', showResult);


// Kb monitoring
window.addEventListener('keydown', (event) => {
        // enter to show result
    if (event.key === 'Enter') {
        event.target.blur();
        showResult();
    } else if (event.key === 'Backspace') {
        // backspace for del
        event.target.blur();
        delChar();
    } else if (event.key === 'c') {
        event.target.blur();
        clear();
    }
});

// Del button
const del = document.querySelector('#del');
del.addEventListener('click', delChar);
function delChar() {
    const typed = document.querySelector("input");
    typed.value = typed.value.slice(0, -1);
}

// AC button
function clear() {
    const typed = document.querySelector("input");
    typed.value = "";
}
const ac = document.querySelector('#ac');
ac.addEventListener("click", clear);

function operatorCount() {
    let expression = document.querySelector("input");
    expression = expression.value;
    const count = expression.match(/[\+\-\*×\/]/g);
    if (count && count.length === 2) {
        showResult();
        field.focus();
    }
}