// // // Set
// // const house1 = "RED";
// // const house2 = "GREEN";
// // const house3 = "BLUE";
// // const house4 = "GREEN";

// // const houses = new Set();

// // console.log(houses);

// // houses.add(house1).add(house2).add(house3).add(house4);

// // console.log(houses);

// // // array
// // const grades = [75, 44, 88, 90, 95];
// // let gradesSum = 0;

// // for (i = 0; i < grades.length; i++) {
// //   gradesSum += grades[i];
// //   console.log(grades[i]);
// // }

// // console.log(grades.length);
// // console.log(gradesSum);
// // console.log(gradesSum / grades.length);

// // insert element in array

// // let data = [20, 21, 22, 33, 44, 55, 66];
// // let position = 3
// // let newElment = 200

// // console.log(data,data.length);

// // for(let i = data.length -1; i >= 0; i--){
// //   if(i >= position){
// //     data[i + 1] = data[i]
// //     console.log(data[i + 1]);
// //     if(i === position){
// //       data[i] = newElment
// //     }
// //   }
// // }

// // console.warn(data);
// // console.log(data.length);

// // let arr = [33, 44, 55, 66]
// // arr.splice(3,0 ,222)

// // console.log(arr);

// // let data = [33, 44, 34, 55, 77, 56, 80]
// // let position = 5

// // for(let i = position; i <= data.length; i++) {
// //   data[i] = data[i + 1]
// // }

// // data.length = data.length -1
// // console.log(data);

// // let data = [12, 33, 22, 32, 33, 3333, 445, 33, 434];
// // let item = 32
// // let index;

// // for(let i = 0; i <= data.length -1; i++) {
// //   if(data[i] === item) {
// //     index = i
// //     break
// //   }
// // }

// // console.log(index);

// // let data = [33, 44, 55, 66, 777, 55, 690];
// // let data2 = [299, 300, 22, 333];
// // let data3 = [];

// // for (let i = 0; i < data.length; i++) {
// //   data3[i] = data[i];
// // }
// // for (i = 0; i < data2.length; i++) {
// //   data3[data.length + i] = data2[i];
// // }

// // console.log(data3); // output [33,  44,  55,  66, 777, 55, 690, 299, 300, 22, 333]
// // console.log(data3.length); // output 11

// // let data4 = [...data, ...data2]

// // console.log(data4);

// // merge two array with while loop
// // let data = [33, 44, 55, 66, 777, 55, 690];
// // let data2 = [299, 300, 22, 333];
// // let data3 = [];

// // let d1 = 0;
// // let d2 = 0;
// // let d3 = 0;

// // while (d1 < data.length && d2 < data2.length) {
// //   if (data[d1] < data2[d2]) {
// //     data3[d3] = data[d1];
// //     d1++;
// //   } else {
// //     data3[d3] = data2[d2];
// //     d2++;
// //   }
// //   d3++;
// // }

// // while (d1 < data.length) {
// //   data3[d3] = data[d1];
// //   d1++;
// //   d3++;
// // }
// // console.log(data3);

// // Search for an Array
// let myArray = [1, 2, 3, 4, 5, 77, 88, 99];
// const searchElement = (array, element) => {
//   for (let i = 0; i < array.length; i++) {
//     // console.log(array[i]);
//     if (array[i] === element) {
//       // console.log(i);
//       return i;
//     }
//   }
//   return -1;
// };

// const elemmentIndex = searchElement(myArray, 5);
// console.log(elemmentIndex);

// // Queue data structure

// function Queue() {
//   this.elements = [];
// }
// // add elements to end of queue
// Queue.prototype.enqueue = function (e) {
//   this.elements.push(e);
// };

// // remove elements from front of the queue
// Queue.prototype.dequeue = function () {
//   return this.elements.shift();
// };

// // check if the queue is empty
// Queue.prototype.isEmpty = function () {
//   return this.elements.length == 0;
// };

// // get the elements at the front of the queue
// Queue.prototype.peek = function () {
//   return !this.isEmpty() ? this.elements[0] : undefined;
// };

// // check the length of the queue
// Queue.prototype.length = function () {
//   return this.elements.length;
// };

// let q = new Queue();

// for (let i = 1; i <= 7; i++) {
//   q.enqueue(i);
// }

// // console.log(q);

// // get current item at the front of the queue
// console.log(q.peek()); // 1

// // get the current length of the queue
// console.log(q.length()); // 7

// // dequeue all elements
// while (!q.isEmpty()) {
//   console.log(q.dequeue()); // 1 2 3 4 5 6 7
// }

// console.log(q); // Queue { elements: [] }

// // stact data structure

// let stack = []

// stack.push(1)
// console.log(stack);

// stack.push(2)
// console.log(stack);

// stack.push(3)
// console.log(stack);

// stack.push(4)
// console.log(stack);

// stack.push(5)
// console.log(stack);

// console.log(stack.pop());
// console.log(stack);

// console.log(stack.pop());
// console.log(stack);

// console.log(stack.pop());
// console.log(stack);

// console.log(stack.pop());
// console.log(stack);

// console.log(stack.pop());
// console.log(stack);

// function reverse (str) {
//   let stack = []

//   for (let i = 0; i < str.length; i++) {
//     stack.push(str[i])
//   }

//   // pop letter from the stack 

//   let reverseStr = "";
//   while(stack.length > 0) {
//     reverseStr += stack.pop()
//   }

//   return reverseStr
// }

// console.log(reverse("JavaScript Stack")); // kcatS tpircSavaJ

// Insertion at a Specific Index

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const insertAtIndex = (array, index, value) => {
  for (let i = array.length; i > index; i--) {
    array[i] = array[i - 1]
    console.log(array[i]);
  }
  array[index] = value
}

let arry = insertAtIndex(myArray, 9, 10)
console.log(arry)
console.log(myArray); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

// Deletion by value
const deleteByValue = (array, value) => {
  const index = array.indexOf(value);
  if(index !== -1) {
    for (let i = index; i < array.length - 1; i++) {
      array[i] = array[i + 1]
    }
    array.length--;
  }
}

deleteByValue(myArray, 3)
// console.log(myArray);

// Delete by index

const deleteByIndex = (array, index) => {
  for (let i = index; i < array.length - 1; i++) {
      array[i] = array[i + 1]
  }
  array.length--
}

deleteByIndex(myArray, 5)
// console.log(myArray);

// Bubble sort 

function bubbleSort (array) {
  const n = array.length;
  for (let i = 0; i < n -1; i++) {
    for (let j = 0; j < n -i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
        console.log(temp);
      }
    }
  }
}

console.log(bubbleSort(myArray))
console.log(myArray);

// serach for an Element

const searchElement = (array, element) => {
  for (let i = 0; i < array.length; i++) {
    if(array[i] === element) {
      return i
    }
  }
  return -1
}

const elementIndex = searchElement(myArray, 9)
console.log(elementIndex);

