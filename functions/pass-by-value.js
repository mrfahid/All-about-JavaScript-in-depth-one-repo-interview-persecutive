// Passing By Value 

// JavaScript pass by value or pass by reference

// In JavaScript, all function arguments are always passed by value. It means that JavaScript copies the values of the passing into argument inside of the function.
// Any changes that you to the argument inside the function does not affect the passing variables outside of the function.In other words,the changes made to the arguments are not reflected outside of the function.

// If function argument are passed by reference,the changes of variable that you pass into the function will be reflected outside the function This is not possible in JavaScript.

// Passing by value of primitive values.

// Let's take a look the following example.

function square(x) {
  x = x * x
  return x
}

var y = 10;

var result = square(y);

console.log(y); // 10
console.log(result) // 100

// How the script works.

// First, define a square() function that an argument x. The function changes the value of the x argument.

//Next, declare the variable y and initialize value to 10:

// Then, pass the y variable into the square() function.When passing the variable y to the squre() function,JavaScript copies the value of y to the x variable.

// Finally,the square() function changes the x variable.However,it does not impact the value of the y variable.This is becuase x and y are totally different variables.They have no link.

// If JavaScript user passing by reference,the value of the variable y would change to 100.

// Passing by value of object

// It's obvious to see that primitive variable are passed by values.However,it is not the case for objects.Take this for example.

function turnOn(machine) {
  machine.isOn = true
}

var computer = {
  isOn: false
}

turnOn(computer)

console.log(computer.isOn); // true


// How the script works:

// Frist, define the turnOn() function that accepts an object machine.The function sets the isOn property of the object to trun.

// Next, declare a variable computer and assign it an object whose isOn property is set to false.

// Internally,the computer is a variable that references the actual object.

// Then, Pass the computer variable into the turnOn() function.

// JavaScript copies the value of the computer variable to machine variable,As a result,both computer and machine variable are referencing the same object in the memory.

// After that,inside the turnOn() function,the isOn property of the object is set to trun via the machine variable.

// Finally,accessing the isOn property of the computer variable returns true.

// It seem that JavaScript passes an object by reference because the changes to the object are reflected outside of the function.However,This is not the case.

// In fact,when you pass an object to a function,you are passing the reference of that object,not the actual object (computer).Therefore,the function can modify the properties of the object via its reference.

// In addition,when you pass an object into a function.

function turnOn2(machine) {
  machine = {
    isOn: true
  }
}

let computer2 = {
  isOn: false
}

turnOn2(computer2)

console.log(computer2.isOn); // false

// This time,the turnOn2() function changes the machine arguemnt so it references another object.

// Before passing the computer object to the turnOn2() function, the isOn property of the computer2 object is false.

// If the computer2 variable was passed by reference,the computer2 variable would be changed and referenced the new object whose isOn property is Ture.