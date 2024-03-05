// Tipically, methods need to create to access data stored in the object.

// for example, you may want to devoplop a method that returns the full name of the person object by concatnenating the first name and last name.

// inside the method, the this value refernces the object that contains the method so you can access an object property using the dot notation

const person = {
  firstName: "shah",
  lastName: "fahid",

  greet() {
    return `Hello`;
  },

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.greet(), person.getFullName());
