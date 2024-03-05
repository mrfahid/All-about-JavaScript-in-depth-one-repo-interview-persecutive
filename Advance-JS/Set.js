// Set 

// Introduction to the JavaScipt Set object

// ES6 provides a new type named Set that stores a collection of unique values of any type.To create a new empty Set,you use the following syntax:

// let setObject = new Set();

// The Set constructor also accepts an optional iterable object.If you pass an iteable object to the Set constructor, all the elements of the iterable object will be added to the new set:

// let setObjects = new Set(iterableObject);

// JavaScript Set examples 

// Create a new Set from an Array

// The following example shows how to create a new Set from an array.

let chars = new Set(['a', 'a', 'b', 'c', 'c'])

// All element in the set must be unique therefore the chars only contains 3 distinct elements a,b and c.

console.log(chars); // Set(3) { 'a', 'b', 'c' }
console.log(typeof(chars)); // object
console.log(chars instanceof Set); // true

// Get size of a set

// To get number of elements that the set holds, you use the size property of the Set object:

let size = chars.size;
console.log(size); // 3

// Add elements to set

// To add an element to the set,you use the add() method:

chars.add('d');
console.log(chars); // Set(4) { 'a', 'b', 'c', 'd' }

// chainable
chars.add('e')
.add('f')
console.log(chars); // Set(6) { 'a', 'b', 'c', 'd', 'e', 'f' }

// Check if a value is in the Set 
// To check if a set has a specific element, you the has() method.
// The has() method returns true if the set contains the element, otherwise, it returns false.

let exist = chars.has('n') // false
let exists = chars.has('a') // true
console.log(exist, exists);

// Remove element from a set

// To delete a specified element from a set,you use the delete method.The following statement deletes the 'f' value from the chats set.

chars.delete('f')
console.log(chars);  // Set(5) { 'a', 'b', 'c', 'd', 'e' }

// Delete all set 
chars.clear();
console.log(chars); // Set(0) {}

// Looping the elements of a JavaScript Set

// A Set object maintains the isertion order of its elements, therefore,when you iterate over its elements.

let roles = new Set();
roles.add('admin')
.add('editor')
.add('subscriber')

// The following example uses the for...loop to iterate over the chars set 

for (const role of roles) {
  console.log(role);
}
// Output 
// admin
// editor
// subscriber

// The Set aslo provides the key().values(), and enteries() methods like the Map.However, keys and values in the Set are identical. For example:

for (let [key, value] of roles.entries()) {
  console.log(key === value);
}
// Output 
// true
// true
// true

// Invoke a callback function on each element of a set

// If you want to invoke a callback an every element of a set,you can use the forEach() method.

roles.forEach((role => console.log(role)))
// Output 
// admin
// editor
// subscriber

// WeakSet 
// A weakSet is similar to a Set except that it cantains only objects. a weakSet does not have size property and connot iterate elements of a weakSet.

let computer = {type: 'laptop'};
let server = {type: 'server'};
let equipment = new WeakSet([computer, server]);

if (equipment.has(server)) {
  console.log('We have a server'); // We have a server
}
