// iterate over properties of an object using
// for....in loop

const obj = {
  bookName: "JsEbook",
  genre: "Programming",
  publish: 2000,
};

for (const key in obj) {
  console.log(`${key}: ${obj[key]},`);
}

// Introduction to JavaScript for...in loop
// The for...in loop over the enumerable properties that are keyed by strings of an object.Note that a property can be keyed by a string or a symbol.

// A property is enumerable when its internal enumerable flag is set to true.
// by defualt enumerable flag set to true
// object.propertyName = value
// let objs = {
//   propertyName: value,
// };

// for(let propertyName in object) {

// }

let person = {
  firstName: "shah",
  lastName: "fahid",
  ssn: "299-24-235",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// for...in loop & inheritance
// for example:
let decoration = {
  color: "red",
};

let cricle = Object.create(decoration);
cricle.radius = 10;

for (const key in cricle) {
  console.log(key);
}

// If you want to enumerate only the own properties of an object, you use the hasOwnProperty() method:
for (const key in cricle) {
  if (cricle.hasOwnProperty.call(cricle, key)) {
    const element = cricle[key]; // 10
    console.log(element);
  }
}

// The for...in loop and Array

const items = [10, 20, 30];
let total = 0;

for (const item in items) {
  total += items[item];
}

console.log(total); // 60

Array.prototype.foo = 100;

for (const prop in items) {
  total += items[prop];
}

console.log(total); // 220

// or another example
let arr = [];
// set the third element to 3, other elements are `undefined`
arr[2] = 3;

// for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// The output shows three element of the array, which is correct:
// undefined
// undefined
// 3

// however, The for...in loop ignores the first two elements:

for (const key in arr) {
  console.log(arr[key]); // 3
}
