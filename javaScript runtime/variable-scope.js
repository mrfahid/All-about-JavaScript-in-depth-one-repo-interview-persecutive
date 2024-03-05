// 'use strict'

// Variable Scopes

// What is variable scope

// Scope determines the visibility and accessibility of a variable.JavaScript has three scopes: global scope, local scope and block scope.

// Global scope

// When you execute a script,the JavaScript engine create a global execution context.

// It also assigns variable that you declare outside of functions to the global exeution context.These variable are in the global scope.They are also known as global variables.

var message = "Hi";

// The variable meassege is galobal scoped.It can accessiable everywhere in the script.

// Local scope

// Variable that you declare inside a function are local to the function.They are called local variables.For example:

var message = "Hi";

function say() {
  var message = "Hello"; 
  console.log(message); // Hello
}

say();
console.log(message); // Hi

// When the JavaScript engine the say() function, it create a function execution context.The variable message that declares inside the say() function is bound to the function execution context of say() function,not the global execution context.

// Scope chain 

// Consider the following example.

var meassege = 'Hi!'

function say() {
  console.log(meassege);
}

say() // Hi!

// In this example,we refernce the variable message inside the say() function.Behind the scenes,JavaScript performs the following.

// 1) Look up the variable meassege in the current context (function execution context) of the say() function.It cannot find any.
// 2) Find the variable message in the outer execution context which is the global execution context. it finds the variable message.

// The way that JavaScript resolves a variable by looking it in its current scope,if it cannot find the variable,it gose up to the outer scope,is called the scope chain.

// Global variable leaks:the weird part of JavaScript

function getCounter() {
  counter = 10;
  return counter
}

console.log(getCounter()); // 10

// In this example, we assigned 10 to the counter variable without the var,let or const keyword and then returned it.

// Outside the function,we called getCounter() function and showed the result in the console.

// This issue is khown as the leaks of the global variables.

// Under the hood,the JavaScript engine frist looks of the couner variable in local scope of the getCounter() function.Because there is no var, let, or const keyword,the counter vaiable is not available in the local scope.it hasn't been created.

// Then, the JavaScript engine follows the scope chain and looks up the counter variable in the global scope also doesn't have the counter variable,so the JavaScript engine create the counter variable in the global scope.

// To fix this 'weird' behavior,you use the 'use strict' at the top of the script or at the top of the function.


function getCounter() {
  // 'use strict'
  counter = 10;
  return counter
}

console.log(getCounter()); // ReferenceError: counter is not defined

// Block scope 

// ES6 provides the let and const keywords that allow you to declare variables in block scope.

// Generally,whenever you see curly brackets {},it is a block.it can be the area within the if,else,switch contitions or for,do while,and while loops.

// See the following example.

function say(message) {
  if(!message) {
    let greeting = 'Hello'; // block scope
    console.log(greeting);
  }
}

// say it again ?

console.log(greeting); // ReferenceError: greeting is not defined

say()

// In this example,we reference the variable greeting outside the if block that result in an error.