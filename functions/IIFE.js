// Immidiately Invoked Function Expressions (IIFE)
// By placing functions and variables inside an IIFE, you can avoid polluting them to global object
(function iife() {
  console.log("this is an IIFE"); // this is an IIFE
})();

((name) => {
  console.log("this is a second IIFE", + name); // this is a second IIFE fahid
})('fahid');
