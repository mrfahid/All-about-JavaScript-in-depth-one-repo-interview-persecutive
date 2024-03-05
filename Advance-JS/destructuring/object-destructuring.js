// Introduction to the JavaScript object destructuring assignment

// Suppose you have a person object with two properties: firstName and lastName.

let person = {
  firstName: "Shah",
  lastName: "Fahid",
};

// ES6 introduces the object destructing syntax that provides an alternative way to assign properties of an object to variables:

let { firstName: fname, lastName: lname } = person;

// If the variables have the same names as the properties of the object, you can make the code more concise as follows:

let { firstName, lastName } = person;

console.log(firstName); // Shah
console.log(lastName); // Fahid

// Setting default values

// You can assign a default value to the variable when the property of an object doesn't exist. for example:

let person2 = {
  firstName: "Shah",
  lastName: "Fahid",
  currentAge: 19,
};

let { firstName1, lastName1, middleName = "", age: currentAge = 18 } = person2;

console.log(middleName); // ''
console.log(currentAge); // 18

// Destructuring a null object

// A function may return an object or null in some situations.For example

function getPerson() {
  return null;
}

// And you the object destructuring assignment:

// let { firstName3, lastName3 } = getPerson();

// console.log(firstName3, lastName3); // Cannot destructure property 'firstName3' of 'getPerson(...)' as it is null.

// To avoid this, you can use the OR operator  (||) to fallback the null object to an empty object:

let { fName, lName } = getPerson() || {};
console.log(fName, lName); // undefined undefined

// Now, no errr will occur.And the firstName will be lastName will be undefined.

// Nested object destructuring
// Assuming that have an employee object which has a name object as the property:

let employee = {
  id: 1001,
  name: {
    firstNames: "Shah",
    lastNames: "Fahid",
  },
};

let {
  name: { firstNames, lastNames },
  name,
} = employee;

console.log(firstNames); // Shah
console.log(lastNames); // Fahid
console.log(name); // { firstNames: 'Shah', lastNames: 'Fahid' }

// Destructuring function arguments
// Suppose you a function that display the car object.
let car = {
  firstName: "Shah",
  lastName: "Fahid",
};

// display(car);

// It's possible to destructure the object argument passed into the function like this:

let display = ({ firstName, lastName }) => {
  console.log(`${firstName} ${lastName}`);
};

let car1 = {
  firstName: "Shah",
  lastName: "Fahid",
};

display(car1); // Shah Fahid

// It look less verbose especilly when you use many properties of the argument object. This technique is often used in react.
