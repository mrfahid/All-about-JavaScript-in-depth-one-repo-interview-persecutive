// myFunc();

// var myFunc = function () {
//   console.log("first");

// myFunc();

// function myFunc() {
//   console.log("second");
// }

// myFunc();

//var keyword variable
// console.log('value of code', code ); // value of code undefined

// var code = "<Hello World>"

// console.log('value of code', code); // value of code <Hello World>

// let keyword

// console.log('value of code', code ); // ReferenceError: Cannot access 'code' before initialization
// TDZ: Temporal Dead Zone
// let code = "<Hello World>" // code will stop becuase for error

// console.log('value of code', code);

// variable = 10;
// (() => {
//   foo = 100;
//   console.log(variable); // 10
//   var foo = 100;
//   variable = 20;
//   console.log(variable); // 20
// })();

// console.log(foo); // ReferenceError: foo is not defined
// console.log(variable);
// var variable = 30;

// for(var i = 0; i < 10; i++) { using var
//   setTimeout(() => console.log(i),0)
//   // 10
//   // 10
//   // 10
//   // 10
//   // 10
//   // 10
//   // 10
//   // 10
//   // 10
//   // 10
// }

// for(let i = 0; i < 10; i++) { // using let
//   setTimeout(() => console.log(i),0)
// /*
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// */
// }

// var fullName = "shah fahid";

// var obj = {
//   fullName: "hacked full name",

//   prop: {
//     fullName: "inside Prop",
//     getFullName() {
//       return this.fullName;
//     },
//   },

//   getFullName() {
//     return this.fullName;
//   },

//   getFullNameV2: () => this.fullName,

//   getFullNameV3: (function () {
//     console.log('hi');
//   })(),
// };

// console.log(obj.prop.getFullName());
// console.log(obj.getFullName());
// console.log(obj.getFullNameV2());
// console.log(obj.getFullNameV3());



// const fahid = {
//   name: "shah fahid",
//   sayName() {
//     console.log(this.name);
//   }
// }

// const jhon = {
//   name: "jhon Doe",
//   sayName() {
//     console.log(this.name);
//   }
// }

// jhon.sayName.call(fahid)

// const fahid = {
//   name: "shah fahid",
//   sayName() {
//     console.log(this.name);
//   }
// }

// setTimeout(fahid.sayName, 3 * 1000)

// const fahid = {
//   name: "shah fahid",
//   sayName() {
//     console.log(this.name);
//   }
// }

// const jhon = {
//   name: "jhon Doe",
//   sayName() {
//     console.log(this.name);
//   }
// }

// // newfn()
// const newfn = jhon.sayName.bind(fahid)

// // setTimeout(newfn, 3 * 1000)
// setTimeout(() => fahid.sayName(), 3 * 1000)


// const obj = {
//   height: 30,
// }

// console.log(obj.height);

// delete obj.height

// console.log(obj.height);

// Define a function that takes an array of names as a parameter
function sortingHat(names) {
  // Create an empty object to store the house assignments
  let houses = {};
  // Loop through each name in the array
  for (let name of names) {
    // Get the length of the name
    let length = name.length;
    // Assign the name to a house based on the length
    if (length < 6) {
      // If the length is less than 6, assign to Gryffindor
      houses.Gryffindor = houses.Gryffindor || [];
      houses.Gryffindor.push(name);
    } else if (length < 8) {
      // If the length is less than 8, assign to Hufflepuff
      houses.Hufflepuff = houses.Hufflepuff || [];
      houses.Hufflepuff.push(name);
    } else if (length < 12) {
      // If the length is less than 12, assign to Ravenclaw
      houses.Ravenclaw = houses.Ravenclaw || [];
      houses.Ravenclaw.push(name);
    } else {
      // If the length is greater than or equal to 12, assign to Slytherin
      houses.Slytherin = houses.Slytherin || [];
      houses.Slytherin.push(name);
    }
  }
  // Return the object with the house assignments
  return houses;
}

// Test the function with some sample names
let names = ["Harry", "Ron", "Hermione", "Draco", "Neville", "Luna", "Ginny", "Fred", "George", "Cho", "Cedric", "Albus", "Severus", "Minerva", "Rubeus"];
let result = sortingHat(names);
console.log(result);