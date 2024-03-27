"use strict";
//DAY 26
//TASK 1 (Function parameters Return value)
//this function adds two numbers and returns the result
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(10, 10)); //result will be 20 
//TASK 2 (Default parameters)
//this function greets a user by name or greets an anonymous user if no name is provided 
function greetUser(name = "anonymous") {
    console.log(`Hello, ${name}!`); //says hello to the given name or to anonymous user
}
//trying the function with a name and without
greetUser("Alice"); //Result Hello,Alice
greetUser(); //Result Hello,anonymous! 
//we checked how our function can say hello to someone by name,or just say hello if we do not know the name. 
//TASK 3 (Funtion Express VS Function Declarations)
//function declaration fro squaring a number 
function squareDeclaration(number) {
    return number * number;
}
//function expression for squaring a number
const squareExpression = function (number) {
    return number * number;
};
//using both functions to square the number 4
console.log(squareDeclaration(5)); //result 25
console.log(squareExpression(5)); //result 25
//Both of the method giving same result, showing two different way to perfrom functions that do the same.
