// Introduction to JavaScript closures
// In JavaScript, a colsure is a function that references variable in the outer scope from its inner scope.The closure preservers the outer scope inside its inner scope.

// To understand the closures, you need to know how the lexical scoping works first

// lexical scoping
// Lexical scoping defines the scope of a variable by the position of that variable declared in the source code.
//for example:

function outer() {
  let name = "fahid";

  function inner() {
    console.log(name);
    let role = "engineer";
  }

  // console.log(role);
  inner(); // fahid
}

outer();

// JavaScript closures
// Closure is a function that preserves the outer scope in its inner scope.
function greeting() {
  let message = "Hi";

  function sayHi() {
    console.log(message);
  }

  return sayHi;
}

let hi = greeting();
hi(); // still can access the message variable

// more examples

function greeting2(message) {
  return function (name) {
    return `${message} ${name}`;
  };
}

let sayHi = greeting2("Hi");
let sayHello = greeting2("Hello");

console.log(sayHi("Fahid")); // Hi Fahid
console.log(sayHello("Fahid")); // Hello Fahid

// The following example illustrates more practical example of closure

const orangeBtn = document.getElementById("orange");
const greenBtn = document.getElementById("green");

// orangeBtn.onclick = () => document.body.style.backgroundColor = "orange"
// greenBtn.onclick = () => document.body.style.backgroundColor = "green"

const clickHandler = (color) => {
  // document.body.style.backgroundColor = color
  return function () {
    document.body.style.backgroundColor = color; 
  };
};

orangeBtn.onclick = clickHandler("orange");
greenBtn.onclick = clickHandler("green");
