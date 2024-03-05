// Array Destructuring

// ES6 provides a new feature called destructing assignment that allow you to destructure properties of an object or elements of an array into individual variables.

// Introduction to JavaScript Array destructing

// Assuming that you have a function that returns an array of numbers as follows:

function getScores() {
  return [70, 80, 90];
}

let scores = getScores();

// let x = scores[0]; // 70
//     y = scores[1]; // 80
//     z = scores[2]; // 90

// console.log(x, y, z);

// Fortunately, strating from ES6, you can use the dectructing assignment as follows:

let [x, y, z] = getScores();
console.log(x); // 70
console.log(y); // 80
console.log(z); // 90

function getScores2() {
  return [70, 80, 90, 100, 120];
}

let scores2 = getScores2();

// let [a, b, c] = getScores2();
// console.log(a); // 70
// console.log(b); // 80
// console.log(c); // 90

// Array Destructuring Assingment and Rest syntax

// It's possible to take remainging elements of an array and put in a new array by using the rest syntax (...)

let [e, f, ...args] = getScores2();
console.log(e); // 70
console.log(f); // 80
console.log(args); // [ 90, 100, 120 ]

// Note that its possible to destructing an array in the assignment that separates from the variable's declaration.
// For example:

let ab, bc;
[ab, bc] = [200, 404];
console.log(ab); // 200
console.log(bc); // 404

// Setting default values

//See the following example:

function getIems() {
  return [10, 20];
}

let items = getIems();
let thirdItem = items[2] != undefined ? items[2] : 0;

console.log(thirdItem); // 0

// Nested array desturcturing

//The following function returns an array that contains an element which is another array,or nested array

function getProfile() {
  return ["Shah", "Fahid", ["Red", "Green", "Blue"]];
}

let [firstName, lastName, [color1, color2, color3]] = getProfile();

console.log(firstName, lastName); // Shah Fahid
console.log(color1, color2, color3); // Red Green Blue

// Array Destructuring Assignment Applications

// Let's see some pratical exeample of using the array destructuring assignment syntax.

// 1 Swapping varibles

// The array destructuring makes it easy to swap values of varibles without using a temporary variable:

let a = 10,
  b = 20;
[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 10

// 2 Functions that return multiple values
// In JavaScript, a function can return a value.However , you can return an array that contains multiple values, for example:

function stat(a, b) {
  return [a + b, (a + b) / 2, a - b];
}

let [sum, average, difference] = stat(20, 10);
console.log(sum, average, difference); // 30 15 10
