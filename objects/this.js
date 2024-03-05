// If you have been working with other programming languages sach as C++,java and PHP,you're already familiar with the this keyword.

// In these languages, the this keyword represents the instance of the current object in the method of the class.And the this keyword is only relevant within a method of the class, meaning that you connot use it outside of a method.

// In JavaScript, you can use the this keyword in the global and function contexts.Moreover,the behavior of the this keyword changes between strict and non-strict mode.

// what is the this keyword
// The this references the object of which the function is a property.In other word,the this references the object that is currently calling the function.
// for example
const counter = {
  count: 0,
  next() {
    return ++this.count;
  },
};
// this reference the counter object.
console.log(counter.next());

// Global context
// In the global context, the this references the global object,which is the window object on the web browers or global object on Node.js.

// This behavior is consistent whether the strict mode is applied or not, like this:
// console.log(this === window); // true

// function Context
// in javaScript, you can invoke a function in the following ways:

// 1 Function invocation
// 2 Method invocation
// 3 Constructor invocation
// 4 Indirect invocation

// Each function invocation devines its own context, therefore,the this behaves diferently than you may expect.

// 1 simple Function invocation
// in the non-strict mode, the this refernces the global object when the function is called as follow:

function show() {
  console.log(this === window); // true
}
// show();

function show2() {
  "use strict";
  console.log(this === undefined); // true

  function display() {
    console.log(this === undefined); // true
  }
  // display();
}

// show2();

// 2 Method invocation
// when you call a method of an object, javascript sets this to the object that owns the method.See the following car object.

let car = {
  brand: "Honda",
  getBrand() {
    return this.brand;
  },
};

console.log(car.getBrand()); // Honda
// let brand = car.getBrand

// console.log(brand()); // undefined

// To fix this issue, you use the bind() method of the function.prototype object.The bind() method create a new function whose the this keyword set a specified value.

let brand = car.getBrand.bind(car); // Honda

console.log(brand());

// 3 Constructor invocation
// when you use the new keyword to create an intaance of a function object use the function as a constructor

function Car(brand) {
  this.brand = brand;
}

Car.prototype.getBrand = function () {
  return this.brand;
};

let cars = new Car("Toyota");
console.log(cars.getBrand()); // Toyota

// ES6 introduced a meta-property named new.target that allows you to delect whether a function is invoked as a simple invocation or as a constructor.

function Car2(brand) {
  if (!new.target) {
    throw Error("Must use the new operator to call the function");
  }
  this.brand = brand;
}

let bmw = new Car2("BMW");
console.log(bmw);

// 4 Indirect invocation
// In JavaScript, function are first-class citizens.In other words, function are object, which are instances of the function type. // ask chatGPT to explain in depth with business logic

// The Function type has two methods: call() and apply().these methods allow you to se the this value when calling a function.
// for example.

function getBrands(prefix) {
  console.log(prefix + this.brand);
}

let honda = {
  brand: "Honda",
};

let audi = {
  brand: "Audi",
};

getBrands.call(honda, `it's a `); // it's a Honda
getBrands.call(audi, `it's an `); // it's an Audi

// The apply() method is similar to the call() method expcept that its second argument is an array of argument

getBrands.apply(honda, [`it's a `]); // it's a Honda
getBrands.apply(audi, [`it's an `]); // it's an Audi

// Arrow functions
// ES6 introduced a new concept named arrow function.In arrow functions, JavaScript sets the this lexically.

// It menans the the arrow function does not create its own execution context, but inherits the this from the outer function where the function is defined.

let getThis = () => {
  console.log(getThis() === window); // true
};

function Cars() {
  this.speed = 120;
}

Car.prototype.getSpeed = () => {
  return this.speed;
};

let car5 = new Cars();
car5.getSpeed(); // TypeError: car5.getSpeed is not a function
