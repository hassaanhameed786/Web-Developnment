// checking out the console is working or not 
// console.log(3+2);

// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

// 
let answer;

// simle conditional statements 
    if (operator == '+') {
    answer = num1 + num2;
}
    else if (operator == '-') {
    answer = num1 - num2;
}
    else if (operator == '*') {
    answer = num1 * num2;
}
    else {
    answer = num1 / num2;
}

// display the result
console.log(`${num1} ${operator} ${num2} = ${answer}`);
// 