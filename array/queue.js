// Introduction to the Queue data structure

// A queue is an ordered list of elements where an element is iserted at the end of the queue and is removed from the front of the queue.

// Unlike a stack,which works based on the last-in,first-out (LIFO) principle, a queue works based on the first-in,first-out (FIFO) prieciple.

// A queue has two main operations involving inserting a new element and removing an existing element.

// The insertion operation is called enqueue,and the removal operation is called dequeue.The enqueue operation inserts an element at the end of the queue,whereas the dequeue operation removes an element from the front of a queue.

// Another important operation of a queue is getting the element at the front called peek.Defferent from the dequeue operation,the peek operation just return the element at the front without modifying the queue.

// The name queue comes from the anology to a queue of customers at a bank.The customers who comes first will be served first,and the one who comes letter is queued at the end of the queue and will be served later.

// Implementing a JavaScript use an array as a queue by using two methods of the Array type.

// 1 Add an element at the end of the array using the push() method.This method is equivalent to the enqueue operation.
// 2 Remove an element from the front of an array using the shift() method.It is same as the dequeue operation.

// For example

function Queue() {
  this.elements = [];
}

// The Queue() constructor function uses an array to store its elements.

// The enqueue() method adds an element at the end of the queue.We use the push() method of the array object to insert the new element at the end of the queue.

Queue.prototype.enqueue = function (e) {
  this.elements.push(e);
};

// The dequeue() method removes an element from the front of the queue.In the dequeue() method,we use the shift() method of the array to remove an element at the front of the queue.

// removes an element from front of the queue
Queue.prototype.dequeue = function () {
  return this.elements.shift();
};

// The isEmpty() method checks if a queue is empty by checking if the length property of the array is zero.

// check if the queue is empty
Queue.prototype.isEmpty = function () {
  return this.elements.length == 0;
};

// The peek() method accesses the element at the front of the queue without modifying it.

// get the element at the front of the queue
Queue.prototype.peek = function () {
  return !this.isEmpty() ? this.elements[0] : undefined;
};

// The query length of a queue,we develop the length() method.

Queue.prototype.length = function () {
  return this.elements.length;
};

// To create a new queue from Queue() constructor function,you use the new keyword as follows.

let q = new Queue()

// The enqueue numbers from 1 to 7,you use the folloeing code.

for (let i = 1; i <= 7; i++) {
  q.enqueue(i)
}

// console.log(q);

// To get the number at the front of the queue,You use the peek() method.

// get current item at the front of the queue.
console.log(q.peek()); // 1

// To get current length of the queue,you use the length() method as in the folloeing example.

// get the current lenght of queue
console.log(q.length()); // 7

// To remove the element at the front of the queue,you use the dequeue() method as follows:

// dequeue all elements 

while(!q.isEmpty()) {
  console.log(q.dequeue());
}

// outPut
// 1
// 2
// 3
// 4
// 5
// 6
// 7
console.log(q);
// Now, you have should have a good understanding of the queue data steucture and know how to use the push() and shift() method of the Array type to implement a queue in JavaScript.

