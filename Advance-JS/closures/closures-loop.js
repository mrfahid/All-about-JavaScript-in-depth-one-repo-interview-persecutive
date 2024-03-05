// JavaScript closures in a loop
for (var index = 1; index <= 3; index++) {
  setTimeout(() => {
    // console.log(`after ${index} second(s) ${index}`);
  }, index * 1000);
}

// Output
// after 4 second(s) 4
// after 4 second(s) 4
// after 4 second(s) 4

// The code show the same message.
// To fix this issue, you need to create a new closure scope in each iteration of the loop.

// There are two popular solutions: IIFE and let keywords

// 1 Using the IIFE solution

for (var index = 1; index <= 3; index++) {
  (function (index) {
    setTimeout(() => {
      // console.log(`after ${index} second(s) ${index}`);
    }, index * 1000);
  })(index);
}

// Output
// after 1 second(s) 1
// after 2 second(s) 2
// after 3 second(s) 3

// 2 Using let keyword in ES6

for (let index = 1; index <= 3; index++) {
  setTimeout(() => {
    console.log(`after ${index} second(s) ${index}`);
  }, index * 1000);
}

// Output
// after 1 second(s) 1
// after 2 second(s) 2
// after 3 second(s) 3
