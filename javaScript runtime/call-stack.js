// Call Stack

// Introduction to JavaSript Call Stack

// JavaScript engine uses a call stack to manage execution contexts: the Global execution Context and Function Execution Context.

// The call stack works based on the LIFO principle i.e.,last-in-first-out.

// when you execute a script ,the JavaScript engine create a Global Execution Context and pushes it on the call stack.

// Whenever a function is called,the JavaScript engine createa Function Executon Context for the function,pushes it on top of the Call Stack ,and starts executing the function.

// If a function call another function, the JavaScript engine create  a new Function Executon Context for the function that is being called and pushes it on top of the call stack.

// When the current function completes,the JavaScript engine pops it off the call stack and resumes the execution where it left off in the last code listing.

// The script will stop when the call stack is empty.

// JavaScript call stack example

//See the following script:

function add(a, b) {
  return a + b;
}

function average(a, b) {
  return add(a, b) / 2;
}

let x = average(10, 20);

// When the script runs, The JavaScript engine places the global execution context (denoted by main() or global() function on the call stack).The global execution context enters the creation phase and move to the execution phase.

// The JavaScript engine executes the call to the average(10, 20) function and creates a function execution context for the average() function and pushes it on top of the call stack.

// The JavaScript engine starts executing the average() since it is at the top of the call stack.

// The average() function calls add() function.At this point,the JavaScript engine create another function execution context for the add() function and places it to the top of the call stack:

// JavaScript engine executes the add() function and pops it off the call stack:

// At this point,the average() function is on top of the call stack,JavaScript engine executes it and pops it off the call stack:

// Now,The call stack is empty so the script stops executing:

// Stack overflow

// The call stack has a fixed size,depending on the implementation of the host environment,either the web browser or Node.js.

// If number of the execution context exceeds the size of the stack, a stack overflow will occur.

// For example,when you execute a recursive that has no exit condition,it will result in a stack overflow error:

function foo() {
  foo();
}
foo(); // stack overflow RangeError: Maximum call stack size exceeded

// Asynchronous JavaScript 

// JavaScript is the single-threaded programming language. The JavaScript engine has only one call stack so that it only can do one thing at a time.

// When execurting a script,the JavaScript engine executes code from top to bottom,line by line.In other words,it is synchronous.

// Asynchronous is the opposite of synchronous,which menans happening at the same time.so how dose JavaScript carry asynchronous  task such as callbaks,promises, and async/await?This is where the event loop comes into the picture that we will cover in the next.

