// Hoisting

// Introduction to the JavaScript hoisting

// When you execute a piece of JavaScript code,the JavaScript engine creates the global execution context.

// The global execution context has two phases: creation and execution.

// During the creation phase,the JavaScript engine moves the variale and function declarations to the top of your code.This feature is khown as hositing in JavaScript.

// Variable hositing

// Variable hoisting means the JavaScript engine moves the variable declarations to the top script.The following example declares the counter variable and sets its value to 1.

// console.log(counter); // undefined
// var counter = 1

// However, the first line of code doesn't cause an error because the JavaScript engine moves the variable the declaration to the top of the script.Technically,the code looks like following in the execution phase.

// var counter;

// console.log(counter); // undefined

// counter = 1

// Technically speaking,during the creation phase of the global execution context,the JavaScript engine places the variable counter in the memory and initializes its value to undefined.

// The let keyword

// The following declares the variable counter with the let keyword.

// console.log(count); // ReferenceError: Cannot access 'count' before initialization

// let count = 2;

// The error message explains that the count variable is already in the heap memory.However,it hasn't initialized.

// Behind the scenes,the JavaScript engine hoists the variable declarations that use the let keyword.However,it doesn't initialize those variables.Notice that if you access a variable that doesn't exist,the JavaScript will throw a different error.

// console.log(alien); // ReferenceError: alien is not defined

// let joy = 3

// Function hoisting

// Like variable,the JavaScript engine also hoists the function declarations.it moves the function declarations to the top of the script.For example.

let x = 20;
y = 10;

let result = add(x, y);

console.log(result);

function add(x, y) {
  return x + y;
}

// In this example,we called the add() function before defining it.The above code is equivalent to the following.

// function add(x, y) {
//   return x + y;
// }

// let x = 20;
// y = 10;

// let result = add(x, y);

// console.log(result);

// During the creation phase of the execution context,the JavaScript engine places the add() function declaration in the heap memory,To be precise,the JavaScript engine creates an object of the Function type and a function reference called add() that refers to the function object.

// Function expressions

// The following example change the add from a regular function to a function expression.

// let z = 20;
// o = 10;

// let results = add2(z, o);

// console.log(results);

// var add2 = function () {
//   return z * o;
// };

// If you execute the code ,the following error will occur.

// TypeError: add2 is not a function

// During the creation phase of the global execution context,the JavaScript engine creates the add variable in the memory and initializes its value to undefined.when executing the memory code,the add2 is undefined,hence,it isn't a function.

// Arrow function

// The following example changes the add function expression to the arrow function.

let a = 20;
b = 20;

let result1 = add3();
console.log(result1);

var add3 = () => a * b;

// The code also issues the same error as the function expression example because arrow function are syntactic sugar for defining function expressions.

// TypeError: add3 is not a function

// Similar to the function expressions,the arrow functions aren't hoisted.



