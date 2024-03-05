// Object Property types
// JavaScript specifies characteristics of property of objects via internal attibutes surrounded by the two pair of square brackets e.g [[Enumerable]]

//There are two types of object properties: data properties and accessor properties.

// Data properties
// A data property contains a single location for a data value.A data property has four attributes:

// [[Configurarable]] - determines whether a property can be redefined or removed via delete operator.
// [[Enumerable]]  - indicates that if a property will be returned in the for...in loop.
// [[Writable]] - specifies that the value of a property can be changed.
// [[Value]] - contains the actual value of a property.

// By defualt,The [[Configurarable]] , [[Enumerable]] , and [[Writable]] attrites set to true for all properties defined drectly on an object.The defualt value of the [[Value]] arrtibute is undefined.

let person = {
  firstName: "shah",
  lastName: "fahid",
};

// To change any attribute of a property, you use the Object.defineProperty() method.
// Object.defineProperty() method accepts three arguments:
// 1 An object.
// 2 A property name of the object.
// 3 A property decriptor object that has four properties: configurarable,enumerable,writable,and value.

let person2 = {};
person2.age = 25;
delete person2.age;
console.log(person2.age); // undefined

// "use strict";
let person3 = {};
Object.defineProperty(person3, "ssn", {
  value: "012-38-9119",
  configurable: false,
});

delete person3.ssn;

// Math.PI
const dscripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(dscripter);

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const chai = {
  name: "ginger chai",
  price: 250,
  isAvaiable: true,
};

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
// {
//   value: 'ginger chai',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,

  orderChai() {
    console.log("chai nai bani");
  },
});

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// {
//   value: 'ginger chai',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`); // ouput price : 250 isAvaiable : true
  }
}
