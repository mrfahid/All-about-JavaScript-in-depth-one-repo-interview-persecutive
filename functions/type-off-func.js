// 1 Anonymous functions
// const number = [1, 2, 3];
// number.forEach(function (num) {
//   console.log(num);
// }); // output 1 2 3

// Functions without a name are called anonymous functions.They are often used as callbacks

// 2 Named function Expressions
// const factorial = function factorial(n) {
//   return n === 0 ? 1 : n * factorial(n - 1)
// }

// console.log(factorial(5)); // output 120

// similar to regular function expression. but with a name . useful for recursion and debugging

// 3 callback functions

// function fetchData(callback) {
//   setTimeout(() => {
//     const data = "some async data";
//     callback(data);
//   }, 1000);
// }

// fetchData((result) => {
//   console.log(result);
// });

// callback function are function passed as arguments to other functions. often used for handling asynchronous operations.

// 4 immediately invoked function expressions (IIFE)

// (function () {
//   console.log("i'm an IIFE");
// })();

// IIFE is a self-invoking function that executes immediately after being defined.

// 5 Generator Functions

// function* gererateNumbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const generator = gererateNumbers()

// console.log(generator.next().value); // output 1
// console.log(generator.next().value); // output 2
// console.log(generator.next().value); // output 3

// Genterator functions allow you to puase and resume their execution, yielding values one at a time

// 6 function declarations

// function greet(name) {
//   console.log(`hello ${name}!`);
// }
// greet('shah fahid')  // output hello shah fahid!

// 7 function expressions

// const multiply = function (a, b) {
//   return a * b;
// };

// console.log(multiply(5, 5));

// 8 Arrow function

// const arrow = (name, job) => `${name} ${job}`; // output shah fahid software engineer
// console.log(arrow('shah fahid', 'software engineer'));

// arrow function provide a more concise syntax for defining functions.They also have a shorter way of writing function bodies when they consist of a single statement

// Higher-Order functions

function higherOrderFunc(operation) {
  return function (a, b) {
    return operation(a, b);
  };
}

const add = higherOrderFunc((a, b) => a + b);
// console.log(add(3, 4)); // output 7

// High-Order functions take one or more function as arguments or return a function as their result

// callback function
// A callback is a function passed into another function as an argument to be executed later.
// Callback function can be synchornous or asynchronous.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// to find odd numbers in the Array. you can use filter method of array Object.
function isOddNumber(number) {
  return number % 2;
}

let oddNumber = numbers.filter(isOddNumber);
console.log(oddNumber); // [ 1, 3, 5, 7, 9 ]


// recursive function
// A recursive function is a function that calls itself until it doesn't.And this technique is called recursive.
function countDown(fromNumber) {
  console.log(fromNumber);

  let nextNumber = fromNumber - 1;

  if (nextNumber > 0){
    countDown(nextNumber)
  }
}

countDown(3) // 3 2 1