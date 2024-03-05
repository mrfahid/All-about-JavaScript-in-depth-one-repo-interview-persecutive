// global scope 
// local scope or block scope

// var globalScope = "this is global variable"; // global variable
// console.log(globalScope);
// function localScope() {
//   var localVariable = "i'm a local variable"
//   console.log(localVariable); // local socpe
// }

// localScope()

// var keyword

// 1. we can access a var variable before initialization...
      // ... as long as the var variable is eventially initialized
      // ... anywhere in our code 
// console.log(user)

// 2. we can declare and redeclare the same var variable without errors
// var user = "mary";
// var user = "john";
// var user = "mark";

// console.log(user);

// let keyword 

// 1. we can't access a let variable before an declare it 
// console.log(user); // thorw an error
// let user;

// 2 we can declare an unassigned variable with let 
// let user;
// console.log(user);

// 3. we can't redeclare a let variable
// let user = 'anna'

// 4.but we can reassign it 
// user = 'anna'
// console.log(user);

// const keyword

// 1.the const variable must be initialized
// console.log(user); // thorw an error
// const user;

// 2 we can't access the const variable before initialization
// console.log(user); // Unexpected token error
// const user = 'andrew'

// 3 we can't redeclare a const variable
// user = 'anna' //  Assignment to constant variable.