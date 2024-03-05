// let arr = [2, 4, 6, 7]

// // pop()
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// let removeLastEl = arr.pop()

// console.log(removeLastEl); // 7
// console.log(arr); // [ 2, 4, 6 ]

// let arr = [2, 4, 6, 7]

// // push()
// Appends new elements to the end of an array, and returns the new length of the array.
// let addLastEl = arr.push(9)

// console.log(addLastEl); // 5
// console.log(arr);// [2, 4, 6, 7, 9]

// let arr = [2, 4, 6, 7]

// shift()
// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// let removefirstEl = arr.shift()

// console.log(removefirstEl); // 2
// console.log(arr); // [ 4, 6, 7 ]

// let arr = [2, 4, 6, 7]

// unshift()
// Elements to insert at the start of the array.Inserts new elements at the start of an array, and returns the new length of the array.
// let addfirstEl = arr.unshift(200)

// console.log(addfirstEl); // 5
// console.log(arr); // [ 200, 2, 4, 6, 7 ]

// let arr = [2, 4, 6, 7]
// let arr2 = ['fahid', 'honey']

// concat()
// Additional arrays and/or items to add to the end of the array.
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// let concat = arr.concat(arr,arr2)

// console.log(concat); // [ 2, 4, 6, 7, 2, 4, 6, 7, 'fahid', 'honey' ]
// console.log(arr, arr2); // [ 2, 4, 6, 7 ] [ 'fahid', 'honey' ]

// let arr = [2, 4, 6, 7]

// find()
// find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// let find = arr.find((num) => num === 9)  // undefine
// let find = arr.find((num) => num === 6) // 6

// console.log(find);

// let arr = [2, 4, 6, 7]

// // map()
// // Calls a defined callback function on each element of an array, and returns an array that contains the results.
// let map = arr.map((nums) => nums)

// console.log(map); // [ 2, 4, 6, 7 ]

// let arr = [2, 4, 6, 7]

// includes()
// The element to search for.
// Determines whether an array includes a certain element, returning true or false as appropriate.
// let includes = arr.includes(5) // false
// let includes = arr.includes(7) //  true

// console.log(includes);

// let arr = [2, 4, 6, 7]

// forEach()
// Performs the specified action for each element in an array.
// let forEach = arr.forEach((nums) => nums) // undefined
// arr.forEach((nums) => {
//   console.log(nums); // 2 4 6 7
// })

// console.log(forEach);

// let arr = [2, 4, 6, 7, 10, 20, 40]

// filter()
// Returns the elements of an array that meet the condition specified in a callback function.
// let filter = arr.filter((nums) => nums > 7) // [ 10, 20, 40 ]

// console.log(filter);
// console.log(arr);

// let arr = [2, 4, 6, 7, 10, 20, 40]

// reduce
// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

// let reduce = arr.reduce((nums, arr) => nums * arr ) // 2688000
// let reduce = arr.reduce((nums, arr) => nums + arr ) // 89

// console.log(reduce);

// indexOf() method
// console.log(arr.indexOf(10)); // 4 index

let arr = [2, 4, 6, 7, 10, 20, 40, 50];
// splice(position,num) method
// The zero-based location in the array from which to start removing elements.Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// console.log(arr.splice(0,4)); // [ 2, 4, 6, 7 ]
// let newArr = arr.splice(4,1) // delete an array element
// console.log(newArr); // 10
// console.log(arr); // [2, 4, 6, 7, 20, 40,50]

// let newArr = arr.splice(4,0,6) // insert new element in an array
// console.log(newArr);
// console.log(arr) // [2, 4, 6, 7, 6, 10, 20, 40,50]

// slice(start,stop) method;
// let sli = arr.slice(3, 6); // return new array not modified orginal array.
// console.log(sli); // [ 7, 10, 20 ]
// console.log(arr); // [2, 4, 6, 7, 10, 20, 40, 50]

// let srtArr = [6, 3, 5, 22, 44, 988, 0, 1000];
// let sort = srtArr.sort((a, b) => a - b);
// console.log(sort); // [0, 3, 5, 6, 22, 44, 988, 1000]
// console.log(srtArr); // [0, 3, 5, 6, 22, 44, 988, 1000]

// every() method
// whitout every method test array
// using for loop to test array elements.
// let nums = [1, 2, 3];
let nums = [-1, -2, -3];
let result = true;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] <= 0) {
    result = false;
    break; //terminate the loop immidiately using the break
  }
}

// console.log(result); // true
// console.log(result); // false

// with every() method
// let numbers = [1, 2, 3];
let numbers = [-1, -2, -3];
let results = numbers.every(function (nums) {
  return nums >= 0;
});

// console.log(results); // ture
// console.log(results); // false

// By using the ES6 arrow function,the code can be even shorter.
let result1 = numbers.every((nums) => nums >= 0);
// console.log(result1); // true
// console.log(result1); // false

// some() method
//Sometimes, you want to check if an array has at lest one element that meets a specified codition.
// For example, to check if the following array has at least one element less than 7

let array = [5, 7, 8, 9, 10];
let lessThanSeven = false; // flag variable
//you typically use a for loop, like this
for (let index = 0; index < array.length; index++) { // data structure way
  if (array[index] < 7) {
    lessThanSeven = true;
    break;
  }
}

console.log(lessThanSeven); // true

// The Array type provides you with an instance method called some() that you to test if an array has at least one element that meets a condition.

let marks = [20, 23, 55, 66, 77];

let lessThanFiftyFive = marks.some((mark) => mark < 55 )

console.log(lessThanFiftyFive); // true

// caution: empty array
// if you call the some() method on an empty array, the result is always false regarless of any contition. for example like this
let result3 = [].some(e => e >= 0)
let result4 = [].some(e => e <= 0)
console.log(`result3: ${result3} and result4: ${result4}`); // result3: false and result4: false
