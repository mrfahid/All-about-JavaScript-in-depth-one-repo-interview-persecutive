// Class
// classes prior to ES6 revisited
// Prior to ES6, JavaScript had no classes.To mimic a class, we often use a constructor function as shown in the following example:
let dog = new Animal("dog");
function Animal(type) {
  this.type = type;
}

Animal.prototype.identiy = function () {
  console.log(this.type);
};

let cat = new Animal("Cat");
// console.log(cat.identiy()); // Cat

// JavaScript class declaration
// ES6 introduced a new syntax  for creating a class as in this example.

// let honda = new Car('honda') // ReferenceError: Cannot access 'Car' before initialization
class Car {
  constructor(brand, name) {
    this.brand = brand;
    this.name = name;
  }

  identiy() {
    console.log(`I'm ${this.name}`);
  }
}

let frotuner = new Car("Toyota", "frotuner");
// console.log(frotuner.identiy()); // I'm frotuner

// console.log(typeof Car); // function

// class Car {
//   constructor(color, speed) {
//     this.color = color
//     this.speed = speed
//   }

//   turbo () {
//     console.log("turbo is on!");
//   }
// }

// const fortuner = new Car('white', 'fast')
// fortuner.turbo()

// const raceCar = new Car('red', 'veryFast')
// raceCar.turbo

// console.log(fortuner, raceCar);

// let bird = {
//   haswings: true,
//   canFly: true,
//   hasFeathers: true
// }

// let eagle1 = Object.create(bird)
// console.log("eagle1", eagle1);

// console.log("eagel1", eagle1.haswings);
// console.log("eagel1", eagle1.canFly);
// console.log("eagel1", eagle1.hasFeathers);

// let eagle2 = Object.create(bird)
// console.log("eagle2", eagle1);

// console.log("eagel2", eagle2.haswings);
// console.log("eagel2", eagle2.canFly);
// console.log("eagel2", eagle2.hasFeathers);

// Class vs. custom type
// Despite the similarities between a class a custom type defined via a constructor function, there are some important diffierences.

// first, class delaration are not hoisted like function declarations.
// for example

// let honda = new Car('honda') // ReferenceError: Cannot access 'Car' before initialization
class Car2 {
  constructor(brand, name) {
    this.brand = brand;
    this.name = name;
  }

  identiy() {
    console.log(`I'm ${this.name}`);
  }
}

let frotuner2 = new Car2("Toyota", "frotuner");
// console.log(frotuner2.identiy()); // I'm frotuner

// JavaScript class expressions

// JavaScript to functions, classes have expression form too.A class expression does not require an identifier after the class keyword.you use a class expression in a variable declaration and pass it into a function as an argument.

const Cpu = class {
  constructor(name) {
    this.name = name;
  }

  identify() {
    console.log(this.type);
  }
};

let duck = new Cpu("Duck");
// console.log(duck instanceof Cpu); // true
// console.log(duck instanceof Object); // true

// console.log(typeof Cpu); // function
// console.log(typeof Cpu.prototype); // object

// First-class citizen
// JavaScript class is a first-class citizen. it menans that you can pass a class into a function, return it from a function, and assign it to a variable.
function factory(aClass) {
  return new aClass();
}

let greeting = factory(
  class {
    sayHi() {
      console.log("Hi");
    }
  }
);

greeting.sayHi(); // Hi

// Singleton
// you can use class expression to create singleton by calling the class constructor immediately.To do this, you use the new operator with a class expression and include the parentheses at the end of class declaration as in the following example.

let app = new (class {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`Starting the ${this.name}...`);
  }
})(`Awesome App`);

app.start(); // Starting the Awesome App...

// In this example, we can create an anonymous class expression and execute it immediately.

// Getter and Setter
// To create a getter and setter, you use get and set keywords following by a space and identifier.See the following example:

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fulName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fulName(str) {
    let names = str.split("");
    if (names.length === 2) {
      this.firstName = names[0];
      this.lastName = names[1];
    } else {
      throw `Invalid name format`;
    }
  }
}

let mary = new Person("Mary", "Doe");
console.log(mary.fulName);

// set new name
// mary.fulName = `Mary William`
// console.log(mary.fulName); // throw `Invalid name format`;

// Computed member names
// like an object literal, you can use computed names for properties of a class. The following Person class is equivalent to the Person class in the previous example except that it uses the name as the computed getter and setter.

let name1 = "fullName";
class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get [name1]() {
    return `${this.firstName} ${this.lastName}`;
  }

  set [name1](str) {
    let names = str.split("");
    if (names.length === 2) {
      this.firstName = names[0];
      this.lastName = names[1];
    } else {
      throw `Invalid name format`;
    }
  }
}

let john = new Person2("john", "Doe");
console.log(john.fulName);

// Static methods
// Prior to ES6, to create a static method,you add the method directly to the constructor.For example,the following adds a static method to the Animal type.

Animal.make = function (type) {
  return new Animal(type);
};

let dogs = Animal.make("dog");

dogs.identiy(); // dog

class Ram {
  constructor(type) {
    this.type = type;
  }

  identify() {
    console.log(this.type);
  }

  static create(type) {
    return new Ram(type);
  }
}

let intelRam = Ram.create("intelRam");
intelRam.identify(); // intelRam

// intelRam.create('rayzan') // TypeError: intelRam.create is not a function

// Implementting JavaScript inheritance
// using extends and super

// Prior to ES6,implementing a proper inheritance required multiple steps.One of the most commonly used stritegies is the protopal inheritance.The following illustrates how the bird inherits properties from the animal using the protopal inheritance technique.
function Animal(legs) {
  this.legs = legs;
}

Animal.prototype.walk = function () {
  console.log(`walking on ${this.legs} legs`);
};

function Bird(legs) {
  Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.consturctor = Animal;

Bird.prototype.fly = function () {
  console.log("flying");
};

let pigeon = new Bird(2);
pigeon.walk();
pigeon.fly();

// ES6 simplified these stpes by using the extends and super keywords. The following example defines the Animal and Brid classes and establishes the inheritance through the extends and super keywords.

class Animals {
  constructor(legs) {
    this.legs = legs;
  }

  walk() {
    console.log(`walking on ${this.legs} legs`);
  }
}

class Brids extends Animal {
  constructor(legs) {
    super(legs);
  }

  fly() {
    console.log("flying");
  }
}

const pigeons = new Bird(2);
console.log(pigeons);
pigeons.walk();
pigeons.fly();

