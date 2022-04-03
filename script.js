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
let next_operator = null;


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
        // TODO Error message
        : (operator === "/" && (a === 0 || b === 0)) ?  0 
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

//  TOOD Floating number (max 1)
// TODO STYLE THE CALCULATOR
// TODO ADD BACKSPACE
// TODO ADD keyboard support

let fill_display = () => {
    OPERATOR_BUTTONS.forEach((button) => {
        button.addEventListener("click", () => {
            let lower_text = DISPLAY_LOWER_TEXT.textContent.toString();
            let upper_text = DISPLAY_UPPER_TEXT.textContent.toString();
            if (first_operand === null && second_operand === null) {
                first_operand = Number(DISPLAY_LOWER_TEXT.textContent);
                operator = button.textContent.trim();
                DISPLAY_UPPER_TEXT.textContent = first_operand.toString();
                DISPLAY_LOWER_TEXT.textContent = ""
            } else if (first_operand != null && second_operand === null && operator != null) {
                second_operand = Number(lower_text);
                DISPLAY_UPPER_TEXT.textContent = operate(operator, first_operand, second_operand).toString();
                first_operand = operate(operator, first_operand, second_operand);
                second_operand = null;
                DISPLAY_LOWER_TEXT.textContent = ""
                operator = button.textContent.trim();
            }
            console.log(`First operand: ${first_operand}`);
            console.log(`Second operand: ${second_operand}`)
        })
    })
    EQUALS_BUTTON.addEventListener("click", () => {
        if (first_operand != null && second_operand === null && DISPLAY_LOWER_TEXT.textContent != "") {
            first_operand = operate(operator, first_operand, DISPLAY_LOWER_TEXT.textContent)
            DISPLAY_UPPER_TEXT.textContent = first_operand.toString();
            DISPLAY_LOWER_TEXT.textContent = "";
 
        }
    })
}
fill_display()



