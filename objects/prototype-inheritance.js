// If you have been working with object-oriented programming languages such as java or C++, you are familiar with the inheritance concept.

// Inheritance and dunder proto ( __proto__ )
// suppose you have an object named animal that has a method called walk().
let animal = {
  walk: function () {
    console.log("walking");
  },
};

// An another object named brid that has a method named fly()
let brid = {
  fly() {
    console.log("flying");
  },
};

// you use dunder proto ( __proto__ )

brid.__proto__ = animal;
brid.walk();

// you should never use __proto__ in the production code.

// JavaScript Prototype Inheritance - old way
// Douglas CrockFort had an article titled "prototypepal inheritance in JavaScript" in 2006. He introduced a function that allows an object to inherit from another object without defining a costom type.

function obj(obj) {
  function F() {
    F.prototype = obj;
    return new F();
  }
}

// Prototype Inheritance. ES5 standard way

// The Object.create() method create a new object based on a specified prototype object.
let animal2 = {
  walk: function () {
    console.log("walking");
  },
};

let brid2 = Object.create(animal2, {
  legs: { value: 2 },
  fly: {
    value() {
      console.log("flying");
    },
  },
});

brid2.fly(); // flying

// ES5 introduced the Object.getPrototypeOf()method that returns the prototype of a specified object.for example

console.log(Object.getPrototypeOf(brid2) === animal2); // true
