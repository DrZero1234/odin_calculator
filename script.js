// Basic operator functions

const calc_buttons = document.querySelector(".numbers");
const DISPLAY = document.querySelector("#display");
// Selecting every number button
const num_buttons = calc_buttons.querySelectorAll("*:not(#clear , #equals)")

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
        : (operator === "/") ? divide(a,b)
        : false
} 

const fill_display = () => {
    num_buttons.forEach((button) => {
        button.addEventListener("click", () =>{
            DISPLAY.textContent += button.textContent;
        })
    })
}

fill_display()

console.log(operate("/",4,5))

