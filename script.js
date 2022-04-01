// Basic operator functions

const CALC_BUTTONS = document.querySelector(".numbers");
const OPERATORS = document.querySelector(".operators")
const DISPLAY = document.querySelector("#display");
// Selecting every number button
const NUM_BUTTONS = CALC_BUTTONS.querySelectorAll("*:not(#clear , #equals)")
const OPERATOR_BUTTONS = OPERATORS.querySelectorAll("button")
const CLEAR_BUTTON = document.querySelector("#clear");
const EQUALS_BUTTON = document.querySelector("#equals")

const test_a = 7;
const test_b = 3;

const add = (a,b) => {
    return Number(a) + Number(b)
}

const subtract = (a,b) => {
    return Number(a) - Number(b)
}

const multiply = (a,b) => {
    return Number(a) * Number(b)
}

const divide = (a,b) => {
    return Number(a) / Number(b)
}



const operate = (operator, a,b) => {
    return (operator === "+") ? add(a,b)
        : (operator === "-") ? subtract(a,b)
        : (operator === "*") ? multiply(a,b)
        : (operator === "/" && b === 0) ? null
        : (operator === "/") ? divide(a,b)
        : null
} 


NUM_BUTTONS.forEach((button) => {
    button.addEventListener("click", () =>{
        DISPLAY.textContent += button.textContent;
    })
})

CLEAR_BUTTON.addEventListener("click", () => {
    DISPLAY.textContent = "";
})

const calculate = () => {

}

console.log(operate("/",4,2))

