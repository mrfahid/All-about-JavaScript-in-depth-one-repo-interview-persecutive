// A loop is progarmming way to run set of instructions (code) repeatedly iterate until a certain conditon is met.
// many type of loop in JS

/* 
┌─────────┬────────────────────────────────────┐
│ (index) │         loops in javaScript        │
├─────────┼────────────────────────────────────┤
│    1    │             for loop               │
│    2    │             for of loop            │
│    3    │             for in loop            │
│    4    │             while loop             │
│    5    │             do while loop          │
│         │                                    │
│         │                                    │
└─────────┴────────────────────────────────────┘
*/

// for loop
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(var i = arr.length -1; i >= 0; i--) {
//   console.log(arr[i]); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// }

// while loope
// let counter = 10

// while(counter >= 0) {
//   console.log(counter);
//   counter = counter - 1
// }

// for of loop // it use objects
let obj = {
  name: "shah fahid",
  role: "front-end engineer",
};

for (const prop of Object.keys(obj)) {
  // console.log(prop, obj[prop]);
} // output  name shah fahid
// role front-end engineer

// for in loop
let object = {
  name: "shah fahid",
  role: "front-end engineer",
};

for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = `${key} ${object[key]}`;
    // console.log(element); // output
    // name shah fahid
    // role front-end engineer
  }
}

// do while loop
let count = 0;

do {
  // console.log("do while loop is", count);
  count++;
} while (count < 5);
// output
// do while loop is 0
// do while loop is 1
// do while loop is 2
// do while loop is 3
// do while loop is 4

// javaScript nested loop
// for(let i = 1; i <= 2;i++) {
//   for(var j = 1; j <= 5; j++) {
//     console.log(`week ${i} day ${j}`);
//   }
// }

// for(let i = 2023; i < 2025; i++) {
//   console.log(i)
//   for(let j = 6; j <= 9; j++){
//     console.log(`........${j}`)
//   }
// }

// it's work only in the browers
// let num = Number(prompt("enter number"))
let num = 11
let sum = 0
for (let i = 0; i < num; i++) {
  sum += (i + 1);
  
}
console.log(`sum of first ${num} natural numbers is ${sum}`);
console.log(typeof num);

