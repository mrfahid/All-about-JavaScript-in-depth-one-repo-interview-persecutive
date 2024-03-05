// there are defferent Non-primitive data type in JS.
// what is data types?
// A data determines the type value that can be stored in a variable.
// non-primitive data types.
// non-primitive data types are mutable and their values can be changed.non-primitive data types can hold multiple value and methods.non-primitive data types are complex data types.

// like primitive data type is TV
// like non-primitive data type is computer.becuase computer is more flexable.

/*
┌─────────┬────────────────────────────────────┐
│ (index) │      non-primitive data type       │
├─────────┼────────────────────────────────────┤
│    1    │             Object                 │
│    2    │             Array                  │
│    3    │             Function               │
│    4    │             Date                   │
│    5    │             Reg-Exp                │
│         │                                    │
│         │                                    │
└─────────┴────────────────────────────────────┘
*/

// some example

// Object
const obj = {
  name: "shah fahid",
  age: 19,
  role: "software engineer",
  now: "student",
  // method
  want() {
    console.log("become a best front-end devepoler in world. In Sha Allah");
  }
}

// console.log(obj.want()) // access method in objects
// become a best front-end devepoler in world. In Sha Allah
// console.table([obj.name,obj["age"],obj["role"]])  // access dot notaion and barket notaion objects propertys.
/* 
┌─────────┬─────────────────────┐
│ (index) │       Values        │
├─────────┼─────────────────────┤
│    0    │    'shah fahid'     │
│    1    │         19          │
│    2    │ 'software engineer' │
└─────────┴─────────────────────┘
*/

// Array
const array = [23, 24, null, undefined, "CS"];

// access array elements and length
console.table([array[3],array[0],array.length])

/*
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │ undefined │
│    1    │    23     │
│    2    │     5     │
└─────────┴───────────┘
*/

// function

function name() { // function declaretion
  console.log("I'm a non CS software student"); 
}

name() // output I'm a non CS software student

const func = function(a,b) { // function experssion
  return a ** b // return statement just return a ** b
}

console.table(func(2, 10)) // 1024

// date 
let newDate = new Date(2024,0,8);
console.table([newDate.toLocaleString()]) //Converts a date and time to a string by using the current or specified locale.

let date =  new Date()
console.log(date.getDate()); // Gets the day-of-the-month, using local time.
console.log(date.getMonth()); // Gets the month, using local time.
console.log(date.getHours()); // Gets the hours in a date, using local time.
console.log(date.getMinutes()); // Gets the minutes of a Date object, using local time.
console.log(date.getSeconds()); // Gets the seconds of a Date object, using local time.

