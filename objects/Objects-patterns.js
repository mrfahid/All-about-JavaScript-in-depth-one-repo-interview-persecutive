// the object literal syntax is convenient for creating a single object. in case you want to create multiple similar objects,you need to use one of the following patterns:

// 1 Factory pattern
// 2 Construtor pattern
// 3 Prototype pattern
// 4 Construtor / Prototype pattern
// 5 Parasitic pattern
// 6 Durable pattern

// Factory pattern
// The factory pattern uses a function to abstract away the process of creating specific

// For-example,
// 1 factory pattern

function createAnimal(name, calton, calback) {
  let o = new Object();
  o.name = name;
  o.calton = calton;
  o.calback = calback;
  console.log(o);
  o.identify = function () {
    console.log("I'm " + o.name);
  };
  return o;
}

// let tom = createAnimal("Tom",'calton', () => {
//   console.log(`I'm Tom`);
// })
// let jerry = createAnimal("Jerry", 'calton')

// tom.identify()
// tom.calback()

//2 Construtor pattern
// javaScript allows you to create a custom constructor function that defines the properties and methods of user-defined objects

// By convention,The name constructor function in JavaScript starts with an uppercase letter.

function Animal(name, calback) {
  this.name = name;
  this.calback = calback;
  this.identify = function () {
    console.log(`I'M ${this.name}`);
  };
  return this;
}

// To create a new instance of Animal, You use the new operator. for example

let donald = new Animal("donald", () => {
  console.log(`I'm ${this.name}`);
});
// console.log(donald.calback);

// Behind The scenes,JavaScript executes these four steps:
// 1 Create a new object.
// 2 Set the this value of the constructor to the object.
// 3 Execute code inside the constructor i.e, adding properties to the new object.
// 4 return the new object.

// The Prototype pattern adds the properties of the object to the prototype object. Then, these properties are available and shared among all instances.

function User() {
  // properties are added to prototype
}

User.prototype.name = "Fahid";
User.prototype.identify = function () {
  console.log(`I'm ${this.name}`);
};

// let's create a new instance of the Animal.

let User1 = new User();
User1.name = "Farhan";
// User1.identify();

// 4 Construtor / Prototype pattern
// The combination of the constructor and prototype pattern is the most common way to define custom types.

// The Construtor pattern defines object properties, while the prototype pattern defines methods and shared properties.

function User2(name) {
  this.name = name;
}

User2.prototype.identify = function () {
  console.log(`"I'm" ${this.name}`);
};

let malik = new User2("malik"); //
// malik.identify();

// 5 Parasitic pattern
// In a parasitic constructor pattern, you create a constructor function that create an object and returns object.

function Car(name) {
  let obj = new Object();
  obj.name = name;
  obj.identify = function () {
    console.log(`it is ${obj.name}`);
  };
  return obj;
}
// call a contructor using the new opterator
let frotuner = new Car("frotuner");
console.log(frotuner.identify);

// durable constructor
// A durable object is an object that dose have public property and it's methods don't reference to the this object.

// The durable object are often used in secure environments where accessing this and new are not allowed.
function securePhone(name) {
  let obj = new Object();
  obj.identify = function () {
    console.log(name); // no this
  };
  return obj;
}

let iphone = securePhone("Iphone 15 pro Max");
iphone.identify();
console.log(iphone);
