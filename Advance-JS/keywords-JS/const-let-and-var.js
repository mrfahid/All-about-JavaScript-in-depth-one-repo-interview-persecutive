// let var and const is keywords in javascript.
// what is defferece between var let and const?
// var has been available from begining of javascript and let const are intorduced as part of ES6.var has function scope.let and const has block scope.var variables will be hoisted.let and const hoisted but not initialized.

// lets see some example

// var keyword
// function abc() {
//   console.log(a); // undefined due to hoisting
//   var a = 10;
//   if (true) {
//     var a = 20;
//   }
//   console.log(a); // 20 (accessible to due function scope) becuase var is accessible whole function.
// }

// abc()

// let keyword
// function abc2() {
//  // console.log(job); // ReferenceError: Cannot access 'job' before initialization
//   let job = "software engineer";
//   if (true) {
//     let job2 = "ML engineer";
//   }
//   console.log(job2); // ReferenceError: job2 is not defined (due to block socp)
//   console.log(job); // software engineer
// }

// abc2()

// const keyword

// function abc3() {
//    // console.log(job); // ReferenceError: Cannot access 'job' before initialization
//     const job = "software engineer";
//     if (true) {
//       const job2 = "ML engineer";
//     }
//     console.log(job2); // ReferenceError: job2 is not defined (due to block socp)
//     console.log(job); // software engineer
//   }
//   abc3()