// Execution Context

// Consider the following code:

let x = 10
function timesTen(a) {
  return a * 10
}

let y = timesTen(x)

console.log(y); // 100

// In this code:
// 1) First, assign 10 to the x variable.
// 2) Second, declare a function timesTen() that multiplies its argument with 10.
// 3) Third, call the timesTen() function by passing in x as a parameter and store the return value in the variable y.
// 4) Finally, output the variable y to the Console.

// The code is straightforward. However, behind the scene,JavaScript does many things.In this tutorial, we will focus on the execution contexts.

// When a JavaScript engine executes a script, it creates execution contexts.
// Each execution context has two phases:the creation phase and execution phase.

// The creation phase
// When a script executes for the first time, the JavaScript engine creates a Global Execution Context.During this creation phase,it performs the following tasks:

// 1) Create a global object i.e., window in the web browser or global in Node.js.
// 2) Create a this object binding which points to the global object above.
// 3) Setup a memory heap for storing variables and function references.
// 4) Store the function declaretion in the memory heap and variable within the global        execution context with the inital value as undefined.

// In our example, during the creation phase, the JavaScript engine stores the variables x and y and the function delaration timesTen() in the Global Execution Context.Besides,it initializes the variable x and y to undefined.
// After the creation phase,the exection context moves to the exection phase.

// The execution phase

// During the execution phase, the JavaScript engine executes the code line by line.In this phase, it assigns valuse to variables and executes the function calls.
// For every function call, the JavaScript engine creates a new FUNCTION EXECUTION CONTEXT.The Function Execution Context is similar to the Global Execution Context,but instead of creating the global object,it creates the arguments object that contains a reference to all the parameters passed into the function:

// In our example, the function execution context the arguments object that references all parameters passed into function,sets this value to the global object,and intialized the a parameter to undefined. 

// During the execution phase of he function execution context,it assingns 10 to the parameter a and returns the result (100) to Globla Execution Context 

// To keep track of all the execution context including the Global Execution Context and Function Execution Context,the JavaScript engine uses a data structure named call stack which you will learn in the next.