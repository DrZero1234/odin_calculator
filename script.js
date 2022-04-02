// Basic operator functions

const CALC_BUTTONS = document.querySelector(".numbers");
const OPERATORS = document.querySelector(".operators")
const DISPLAY = document.querySelector("#display");
const DISPLAY_NUMBERS = document.querySelector(".display-numbers").querySelectorAll("li");
const DISPLAY_UPPER_TEXT = DISPLAY_NUMBERS[0];
const DISPLAY_LOWER_TEXT = DISPLAY_NUMBERS[1];
// Selecting every number button
const NUM_BUTTONS = CALC_BUTTONS.querySelectorAll("*:not(#clear , #equals)")
const OPERATOR_BUTTONS = OPERATORS.querySelectorAll("button")
const CLEAR_BUTTON = document.querySelector("#clear");
const EQUALS_BUTTON = document.querySelector("#equals")

let first_operand = null;
let second_operand = null;
let operator = null;


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
        DISPLAY_LOWER_TEXT.textContent += button.textContent;
    })
})

CLEAR_BUTTON.addEventListener("click", () => {
    first_operand = null;
    second_operand = null;
    operator = null;
    DISPLAY_UPPER_TEXT.textContent = "";
    DISPLAY_LOWER_TEXT.textContent = "";
})

let fill_display = () => {
    if (first_operand === null && second_operand === null) {
        OPERATOR_BUTTONS.forEach((button) => {
            button.addEventListener("click", () => {
                first_operand = Number(DISPLAY_LOWER_TEXT.textContent);
                DISPLAY_UPPER_TEXT.textContent = DISPLAY_LOWER_TEXT.textContent;
                DISPLAY_LOWER_TEXT.textContent = ""
            })
        })
    } else if (first_operand != null && second_operand === null) {
        OPERATOR_BUTTONS.forEach((button) => {
            button.addEventListener("click", () => {
                second_operand = Number(DISPLAY_LOWER_TEXT.textContent);
                DISPLAY_UPPER_TEXT.textContent = "";
                DISPLAY_LOWER_TEXT.textContent = +operate(button.id, first_operand, second_operand)
                first_operand = operate(button.id, first_operand, second_operand)
            })
        })
    }
    
}

fill_display()



