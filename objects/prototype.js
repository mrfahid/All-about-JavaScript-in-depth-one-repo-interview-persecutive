// introduction to javaScript engine prototype
// By default, the javascript engine provides the Object() function and an anonymous object that can be referenced via the Object.prototype

// console.log(Object);
// onsole.log(Object.prototype);

// // The Object.prototype object has many built-in method and properties such as toString(), valueOf, etc.

// // and it has a property named constructor that references the Object() funtions:
// console.log(Object.prototype.constructor === Object); // true

// // funcion foo
// function Foo(name) {
//   this.name = name;
// }

// // behind the scenes, the javaScript engine create a new funtion Foo() and an anonymous object.

// Foo.prototype.whoAmI = function() {
//   return `I am ${this.name}`
// }

// // create a new instance of the Foo object:
// let a =  new Foo('a')
// let b =  new Foo('b')

// b.say = function() {
//   console.log(`Hi from ${this.whoAmI()}`);
// }

// console.log(a.constructor); // true
// console.log(a.constructor === Foo); // true
// console.log(b.whoAmI());c

// function createUser(username, score) {
//   this.username = username
//   this.score = score
// }

// createUser.prototype.increment = function() {
//   this.score++
//   console.log('hi');
// }
// createUser.prototype.printMe = function() {
//   console.log(`price is ${this.score}`);
// }

// const chai = new  createUser('chai', 25)
// const tea = new createUser('honeyChai', 250)
// chai.printMe()

// chai.say = function() {
//   console.log(`${this.increment}`);
// }

// console.log(chai.increment());
// let myHeros = ['thor', 'speiderman']

// let heroPower = {
//   thor: "hammer",
//   spiderman: "sling",

//   getSpiderPower: function() {
//     console.log(`Spidy power is ${this.spiderman}`);
//   }
// }
// Object.prototype.fahid = function() {
//   console.log(`fahid is present in all objects`);
// }
// heroPower.fahid()
// console.log(heroPower);

// Array.prototype.heyFahid = function() {
//   console.log(`fahid says hello`);
// }

// myHeros.fahid()
// myHeros.heyFahid()
// // heroPower.heyFahid()

// inheritance

const User = {
  name: "fahid",
};
const Teacher = {
  makeVidio: true,
};

const TeachingSupport = {
  isAvailabe: false,
};

const TASupport = {
  makeAssigiment: "Js assignment",
  fulTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;
console.log(Teacher.name);

// moderen syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
console.log(TeachingSupport);

let anotherUsername = "chai Aur Code";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"fahid".trueLength();
