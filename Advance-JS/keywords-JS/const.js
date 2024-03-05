// Const

// Introduction to the JavaScript const keyword

// ES6 provides a new way of declaring by using the const keyword.
// The const keyword create a read-only reference to a value.

// const CONSTANT_NAME = value

// The const keyword work like the let keyword.But the const keyword creates block-scoped variable whose valuse can't be reassigned.

// The variables declared by the let keyword are mutable. It means that you can change their values anytime you want as shown in the following example:

let a = 10;
a = 20;
a = a + 5;
console.log(a); // 25

// However, variable created by the const keyword are "immutable".In other words, you can't ressign a them to defferent values.

const rate = 0.1;
// rate = 0.2; // TypeError: Assignment to constant variable.

// intializer in the const variable declaration

// const red; // SyntaxError: Missing initializer in const declaration

// JavaScript const in a for loop

// ES6 provides a new construct called for...of that allows you to create a loop iterating over iterable object  such as arrays, maps, and sets.

let scores = [75, 80, 95];
for (let score of scores) {
  console.log(score);
}

let scores2 = [75, 80, 95];
for (const score of scores2) {
  console.log(score);
}

// try to for loop

let array = [45, 55, 65, 75, 95];
for (const index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element); // TypeError: Assignment to constant variable.
}

// The reason is taht the declaration is only evaluated once before the loop body strat.
