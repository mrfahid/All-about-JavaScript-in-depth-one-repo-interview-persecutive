// In JavaScript an object is collection of properties, defined as a key - value pair.Each property has a key and a value.The property key can be a string and the property value can be any valid value.

// To create an object. you use object literal syntax.
// for instance
let empty = {};

// To create an object  with properties, you use the key : value syntax.
// for instance

let user = {
  firstName: "John",
  lastName: "Doe",
  age: 20,

  // password: function() {
  //   console.log('your password is encrpteded');
  // },
  // ES6 shorthand
  password() {
    console.log("your password is encrpteded");
  },
};

// Accessing properties
// To access a property of an object, you use one of two notations: the dot natation and array-like notation.

// 1) The dot notation ( . )
// user.firstName
// console.log(user.firstName);

// 2) Array-like notation ( [] )
// user['age']
// console.log(user['age']);

// console.log(user.'firstName');
// console.log(user['firstName']);

// change the property's value
// To change the  value of a property, you use the assignment operator.
// for instance
user.firstName = "fahid";
console.log(user.firstName); // fahid

// Delete a property of an object.
// delete operator
delete user.age;
console.log(user); // { firstName: 'fahid', lastName: 'Doe' }

// check if a property exists
// you uses the ( in ) operator
// "sss" in user
console.log("age" in user); // false
console.log("lastName" in user); // true

// methods
// Object have actions. The actions are represented by functions.The following snippet adds the password action to the user object:

user.password();
// console.log(user.password());

// const Car = {
//     engine: true,
//     steering: true,
//     speed: true
// }

// const sportsCar = Object.create(Car)
// sportsCar.speed = 'fast'
// console.log('the sportsCar object: ', sportsCar);

// console.log("..... for-in loop unreliable ......");
// for (prop in sportsCar) {
//   console.log(prop);
// }

// console.log("%", "iterateing over object and its prototype");

// for(prop of Object.keys(sportsCar)) {
//   console.log(prop + ": " + sportsCar[prop]);
// }

// console.log("%..", "iterateing over objec's own prototype only");
