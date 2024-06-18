//create a basic calculator
//add, subtract, multiply, divide
//create a function for each of the operations
//add, subtract, multiply, divide
//each function should take two arguments
//return the result of the operation
//export each function

const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

export { add, subtract, multiply, divide };

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));


