/*--------------------------------------------------------------------------------------------
Problem statement 1:
The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names 
--------------------------------------------------------------------------------------------*/

// Define a function that takes an array of names as a parameter
function sortingHat(names) {
  // Create an empty object to store the house assignments
  let houses = {};
  // Loop throught each name in the array
  for (const name of names) {
    // Get the length of the name
    const len = name.length;
    // assign the name to the house based on the length
    if (len < 6) {
      // If the length is less than 6, assign to Gryffindor
      houses.Gryffindoer = houses.Gryffindoer || [];
      houses.Gryffindoer.push(name);
    } else if (len < 8) {
      // If the length is less than 8, assign to Hufflepuff
      houses.Hufflepuff = houses.Hufflepuff || [];
      houses.Hufflepuff.push(name);
    } else if (len < 12) {
      // If the length is less than 12, assign to Ravenclaw
      houses.Revenclaw = houses.Revenclaw || [];
      houses.Revenclaw.push(name);
    } else {
      // If the length is greater than or equal to 12, assign to Slytherin
      houses.Slytherin = houses.Slytherin || [];
      houses.Slytherin.push(name);
    }
  }
    // Return the object with the house assignments
    return houses;
}

let names = ["Harry", "Ron", "Hermione", "Draco", "Neville", "Luna", "Ginny", "Fred", "George", "Cho", "Cedric", "Albus", "Severus", "Minerva", "Rubeus"];
let result = sortingHat(names);
// console.log(result);

/*--------------------------------------------------------------------------------------------
Problem statement 2:
The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
--------------------------------------------------------------------------------------------*/

// Define a function that takes an array of numbers as a parameter
function doubleTrouble (numbers) {
  // Create an empty array to store the doubled elements
  const doubled = [];
  // Loop through each element in the array
  for (let i = 0; i < numbers.length; i++) {
    // Get the current element
    let currentElement = numbers[i];
    // Check if the current element is equal to the next element
    if (currentElement === numbers[i + 1]) {
      // If yes, skip the next element and continue the loop
      i++;
    }
    // Double the current element and push it to the doubled array
    // console.log(currentElement);
    doubled.push(currentElement * 2)
    // console.log(currentElement);
  }
  // Return the doubled array
  // console.log(doubled);
  return doubled 
}

let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
let numbers3 = [1, 2, 2, 2, 3, 4, 4, 4, 5]

let results = doubleTrouble(numbers3)
// console.log(results);


/*--------------------------------------------------------------------------------------------
problem statement 3: 
The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
--------------------------------------------------------------------------------------------*/
// Define a function that takes a string as a parameter
function mirrorMirror(str) {
  // Create an empty string to store the reversed string
  let reverseString = '';
  // Loop through each character of the original string from the end to the beginning
  for (let i = str.length - 1; i >= 0; i--) {
    // Append the character to the reversed string
    reverseString += str[i];
  }
    // Return the original string concatenated with the reversed string
    return str + reverseString;
}

// Test the function with some sample strings
let str1 = "hello";
let str2 = "world";
let str3 = "mirror";
let str4 = "shahfahid"

let result1 = mirrorMirror(str1);
let result2 = mirrorMirror(str2);
let result3 = mirrorMirror(str3);
let result4 = mirrorMirror(str4);
console.log(result1); // helloolleh
console.log(result2); // worlddlrow
console.log(result3); // mirrirror
console.log(result4); // shahfahiddihafhahs