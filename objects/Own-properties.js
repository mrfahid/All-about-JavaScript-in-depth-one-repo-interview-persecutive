// In javaScript, an object is a collection of properties,where each property a key-value pair.

let person = {
  firstName: "shah",
  lastName: "fahid",
};

// JavaScript uses protoypal inheritance.Therefore, a property of an object can be either own or inherited.

const employee = Object.create(person, {
  job: {
    value: "JS Developer",
    enumerable: true,
  },
});

// The hasOwnProperty() method returns if a property is own.
// for example:

console.log(employee.hasOwnProperty("job")); // true
console.log(employee.hasOwnProperty("firstName")); // false
console.log(employee.hasOwnProperty("lastName")); // false
console.log(employee.hasOwnProperty("ssn")); // false
