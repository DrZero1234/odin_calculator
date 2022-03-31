// Basic operator functions

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


console.log(add(test_a,test_b))
console.log(subtract(test_a,test_b))
console.log(multiply(test_a,test_b))
console.log(divide(test_a,test_b))