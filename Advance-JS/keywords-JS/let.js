// Introduction to the JavaScript let Keyword

// In ES5, when you declare a variable using the var keyword,the scope of the variable is global if you declare it outside of a function or local in acase you declare it inside a function.

// ES6 provide a new way of declaring by using the let keyword. The let keyword is similar to the var keyword, except that the variable it declare are block-scope:

// In JavaScript, Block are denodet by curly braces {}, for example the if else, fokr, do while, while, try catch and so on:

let x = 10;
if (x == 10) {
  let x = 20;
  console.log(x); // 20: reference x inside the block
}

console.log(x); // 10: reference at the begining of the script

// JavaScript let and callback function in a for loop

for (var index = 0; index < 5; index++) {
  setTimeout(() => {
    // console.log(index);
  }, 1000);
}

// 5
// 5
// 5
// 5
// 5

// The intention of the code is to output numbers from 0 to 4 the console every second.Howerver, it outside the number 5 five times.

// The reason is that after five iterations, the value of the index variable is 5. And the five instances of the callback function passed to the setTimeout() function references the same varible index a with the final value 5.

// In ES5, you fix this issue by creating another scope so that each instance of the callback function reference a new variable.And to create a new scope, you need to create a function.Typically, you use the IIFE pattern as followas:

for (var index = 0; index < 5; index++) {
  (function (index) {
    setTimeout(() => {
      // console.log(index);
    }, 1000);
  })(index);
}
// Output
// 0
// 1
// 2
// 3
// 4

// In ES6, the let keyword declares a new variable in each loop iteration, therfore,you just need to replace the var keyword by the let keyword to fix the issue

for (let index = 0; index < 5; index++) {
  // setTimeout(() => console.log(index), 1 * 1000);
}
// Output
// 0
// 1
// 2
// 3
// 4

// Redeclaration 

var counter = 0
var counter;

console.log(counter);  // 0

// let counter = 0
// let counter;

// console.log(counter);  // Identifier 'counter' has already been declared

// JavaScript let variables and hoisting

// let's examine the following example

// console.log(counter2); // ReferenceError: Cannot access 'counter2' before initialization
// let counter2 = 10


// Temporal death zone (TDZ)

// A variable declared by the let keyword a so-called temporal dead zone (TDZ). The TDZ is the time from the start of the block until the variable declaration is processed.

// The following example illustrates that temporal dead zone is time-based not location-based.

{ // ente new scope, TDZ strats
  let log = function() {
    console.log(foo); // foo declared later
  }

  // The is the TDZ and accessing foo
  // would cause a ReferenceError

  let foo = 10 // TDZ ends
  log() // called outside TDZ
}

{ // TDZ strats
  console.log(typeof bar); // undefined
  console.log(typeof foo); // ReferenceError: Cannot access 'foo' before initialization
  let foo; // TDZ ends
}