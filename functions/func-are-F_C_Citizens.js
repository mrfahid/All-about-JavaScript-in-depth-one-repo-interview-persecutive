// Functions are First-Class Citizens

// Storing functions in variables

// Functions are first-class citizen in JavaScript.In other words,you can treat function like values of other types.

// The following declares the add() function and assigns the function name to the variable sum.

function add(a, b) {
  return a + b;
}

// let sum = add

// In the assignment statement,we didn't include the opening and closing parentheses at the end of the add identifier.We also ditn't execute the function but referencing the fnction itself.

// It means that we have two ways to execute the same function.We can call it normally as follows.

let result = add(10, 20);

// Or

// let sum = sum(10, 20);

// Passing a functions to another function

// Because functions are values, you can pass a function as an argument into another function.

// The following declares the average() function that takes three arguments. The third argument is a function.

// Put it all together
function add(a, b) {
  return a + b;
}

let sum = add;

function average(a, b, fn) {
  return fn(a, b) / 2;
}

// Now, you pass the sum function to the average() function as follows.

let result2 = average(10, 20, sum);

console.log(result2); // 15

// Returning functions from functions

// Since function are values,you can return a function another function.

// The following compareBy() function return a function that compares two objects by a provided property.

function compareBy(propName) {
  return function (a, b) {
    let x = a[propName],
      y = b[propName];

    if (x > y) {
      return 1;
    } else if (x < y) {
      return 1;
    } else {
      return 0;
    }
  };
}

// Suppose that you have an array of product objects where each product object has two properties. name and price.

let products = [
  { name: "iPhone", price: 900 },
  { name: "Sumsung Galaxy", price: 850 },
  { name: "Sony Xperia", price: 700 },
];

// You can sort an array by calling the sort() method.The sort() method accepts a function that compares two elements of array as an argument.

// For example,you can sort the product list based on the name by passing a function returned from the compareBy() function as follows.

console.log('Products sorted by name:');
products.sort(compareBy('name'))

console.table(products);

// Simillary,you can sort the product list by price

// sort products by price 
console.log('Products sorted by name:');
products.sort(compareBy('price'))

console.table(products);

// More example

// The following example declares two function that convert centimeters to inches and vice versa.

function cmToIn(length) {
  return length / 2.54
}

function intoCm(length) {
  return length * 2.54;
}

// The following convert() function has two parameters.The first parameter is a function and the second one is the length that will be converted based on the first argument.

function convert(fn, length) {
  return fn(length)
}

// To convert cm to in,you can the covert() function and pass the cmToIn function into the covert() function as the first arqument 

let inches = convert(cmToIn, 10) 
console.log(inches); // 3.937007874015748

// Similarly,to convert inches to centimeters,you can pass the inToCm function into the convert() function,like this.

let cm = convert(intoCm, 10) 
console.log(cm);


