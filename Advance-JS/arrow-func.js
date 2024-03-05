// Arrow function

// Arrow functions are a usefule new feature of ES6.with arrow functions, you can create functions without using the function keyword.You also often do not have to use the return keyword.Let's consider a function that takes in a firstName and return a string, turing the person into a lord.Anyone can be a lord:

const lordify = (firstName) => {
  return `${firstName} of Canterbury`;
};

console.log(lordify("Fahid")); // Fahid of Canterbury
console.log(lordify("Honey")); // Honey of Canterbury

// With arrow function, we can simiplify the syntax tremendously:

const lord = (firstName) => `${firstName} of Canterbury`;
console.log(lord("farhan")); // farhan of Canterbury

// With the arrow,we now have an entire function declaration on one line.
// The function keyword is removed.We also remove return because the arrow points to what should be returned.Another benefit is that if the function only takes on argument,we can remove the parentheses around the arguments.

// More than one argument should be surrounded by parentheses:

const lordify2 = (firstName, land) => `${firstName} of ${land}`;

console.log(lordify2(`Don`, `Piscataway`)); // Don of Piscataway

//We can keep this as a one-line function because there is only on setement that needs to be returned.if there are multiple lines, you'll use curly braces:

const lordify3 = (firstName, land) => {
  if (!firstName) {
    throw new Error(`A firstName is required to lordify`);
  }

  if (!land) {
    throw new Error(`A lord must have a land`);
  }

  return `${firstName} of ${land}`;
};

console.log(lordify3("Kelly", "Sonoma")); // Kelly of Sonoma
console.log(lordify3("Dave")); // Error: A lord must have a land

// These if/else statements are surrounded with brackets but still benefit from the shorter syntax of the arrow function.
