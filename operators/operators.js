// javaScript operators
// Arithmetic operators
/* 
┌─────────┬────────────────────────────────────┐
│ (index) │       Arithmetic operator          │
├─────────┼────────────────────────────────────┤
│    1    │       +    Addition                │
│    2    │       -    subtraction             │
│    3    │       *    multiplecation          │
│    4    │       /    divion                  │
│    5    │       %    Modulus                 │
│    6    │      ++    increment               │
│    7    │      --    decrement               │
└─────────┴────────────────────────────────────┘
*/

// comparison operators
/* 
┌─────────┬────────────────────────────────────┐
│ (index) │       comparison operator          │
├─────────┼────────────────────────────────────┤
│    1    │      ==    equality                │
│    2    │      !=    not equal               │
│    3    │      ===   strict equality         │
│    4    │      !==   not equality            │
│    5    │      >     greater than            │
│    6    │      <     less than               │
│    7    │      >=    greater than equal      │
│    8    │      <=    less than equal         │
└─────────┴────────────────────────────────────┘
*/

// logical operators
/* 
┌─────────┬────────────────────────────────────┐
│ (index) │       logical operator             │
├─────────┼────────────────────────────────────┤
│    1    │      &&    logical and             │
│    2    │      ||    logical or              │
│    3    │      !     logical not             │
└─────────┴────────────────────────────────────┘
*/

// apart from these we also have topic and operator bitwse operator bit by bit operator on number

// code example
// Arithmetic operations
let a = 10;
let b = 4;
console.log(`a + b = ${a + b}`); // a + b = 14
console.log(`a - b = ${a - b}`); // a - b = 6
console.log(`a * b = ${a * b}`); // a * b = 40
console.log(`a / b = ${a / b}`); // a / b = 2.5
console.log(`a % b = ${a % b}`); // a % b = 2
console.log(`a-- = ${a--}`); // a-- = 10
console.log(`a++ = ${a++}`); // a++ = 9
console.log(`a++ = ${a++}`); // a++ = 10

// coparison operatios

console.log('2' == 2); // true
console.log("2" != null); // true
console.log("2" === 2); // false
console.log(undefined !== 0); // true
console.log(1 > 3); // false
console.log(0 < 0); // false
console.log(null >= null); // true
console.log("2" <= 3); // true

// logical operations

// logical and checks both hand sides true then return true and even if true one hand sides it's return false
console.log(11 > 10 && 33 < 100); // true 
// logical or checks both but one contition is true it's return true and even if both false it's return false 
console.log(1  >= 0 || 2 < 3 ); // true
// logical not very simple it checks if it is true it's return false and if false it's return true
console.log(!true); // false

// it's just example not real world example
