// Map

// Introduction to JavaScript Map object

// Prior to ES6, when you need to map keys to values, you often use an object, because an object allows you to map a key to a vlaue of any type.

// However, using an object as a map has some side effects:

// 1 An object always has a default key like the prototype.
// 2 A key an object must be a string or a symbol,you connot use an object as a key.
// 3 An object dose not have a property that represents the size of the map.

// ES6 provides a new collection type called Map that addresses these deficiencies.

// By definition, a Map object holds key-value pairs where values of any type can be used as eiter keys or values.In addition,a Map object remembers the original insertion order of the keys.

// To create a new Map, you use the following syntax:

// let map = new Map([iterable]);

// The Map() accepts an optional iterable object whose element are key-value pairs.

// JaavaScript Map examples

// create a new Map object

// Suppose you have a list of user object as follows:

let fahid = { name: "shah fahid" },
  honey = { name: "Honey" },
  farhan = { name: "farhan" };

// Assuming that you have to create a map of user and roles. In this case, you use the following code:

let userRole = new Map();

// The userRole is an instance of the Map object and its type is an object as illustrate in the following example:

console.log(typeof userRole); // object
console.log(userRole instanceof Map); // true

// Add element to a Map

// To assign role to a user, you the set() method

userRole.set(fahid, "admin");

// The set() method map user fahid with the admin role.Since the set() method is chainable, you can save some typings as shown in this example:

userRole.set(honey, "editor")
.set(farhan, "subscriber");

// Initialize a Map with an iterable object

// As mentioned earlier, you can pass an iterable object to the Map() constructor

let userRole2 = new Map([
  [fahid, "admin"],
  [honey, "editor"],
  [farhan, "subscriber"],
]);

// Get you want to see the roles of fahid, you use the get () method:
let get = userRole2.get(fahid);
console.log(get); // admin

let foo = { name: "foo" };
// Check the existence of an element by key

// To check if a key exists in the map, you use the has() method.

let fo = userRole.has(foo); // false
let far = userRole2.has(farhan); // true

console.log(fo);
console.log(far);

// Get the Number of return of eelement in the map

// The size property returns the number of entries in the map.

console.log(userRole.size); // 3

// Iterate over map keys

// To get the keys of a Map object,you use the keys() method.
// The keys returns a new iterator object that contains the keys of elements in the map.

for (const user of userRole2.keys()) {
  console.log(user.name);
}
// Output
// shah fahid
// Honey
// farhan

// Iterate over map values

// Similarly, you can use the values() method to get on iterator object that contains values for all the elements in the map:

for (const role of userRole2.values()) {
  console.log(role);
}
// Output
// admin
// editor
// subscriber

// Iterate over map element

// Also, the entries() method return an iterator object that contains an array of [key, value] of each element in the Map object:

for (const [key, value] of userRole2) {
  console.log(key, value);
}
// Output
// { name: 'shah fahid' } admin
// { name: 'Honey' } editor
// { name: 'farhan' } subscriber

for (const elements of userRole2.entries()) {
  console.log(`${elements[0].name}: ${elements[1]}`);
}
// Output
// shah fahid: admin
// Honey: editor
// farhan: subscriber

// To make the iteration more natural,you can use destructing as follows:

for (const [user, role] of userRole2.entries()) {
  console.log(`${user.name}: ${role}`);
}
// Output
// shah fahid: admin
// Honey: editor
// farhan: subscriber

// In addition to for...of loop, you can use the forEach() method of the map object:

userRole.forEach((role, user) => console.log(`${user.name}: ${role}`));
// Output
// shah fahid: admin
// Honey: editor
// farhan: subscriber

// convert map keys or values to a array

// Sometimes, you want to work with an array instead of an iterable object, in this case,you can use the spread operator.For example:

// The following example converts keys for each element into an array of keys:

let keys = [...userRole.keys()];
console.log(keys); // [ { name: 'shah fahid' }, { name: 'Honey' }, { name: 'farhan' } ]

// And the following converts the values of elements to an array:

let roles = [...userRole2.values()];
console.log(roles); // [ 'admin', 'editor', 'subscriber' ]

// Delete an element by key

// To delete an entry in the map,you use the delete() method.

userRole.delete(farhan);
console.log(userRole.get(farhan)); // undefined

// Delete  all elements in the map

// To delete all entries in the Map object, you use the clear() method:

console.log(userRole);
// Output
// Map(2) {
//   { name: 'shah fahid' } => 'admin',
//   { name: 'Honey' } => 'editor'
// }

userRole.clear();
console.log(userRole); // Map(0) {}
