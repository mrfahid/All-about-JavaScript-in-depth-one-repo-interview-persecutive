// Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous opetration and its resulting value.

// In JavaScript, a promise is an object that returns a value which you hope to receive in the future, but not now.

// A promise has three states
// 1 Pending: you don't know if you will complete leraing JavaScript by the next month.
// 2 Fulfilled: you complete learning JavaScript by the next month.
// 3 Rejected: you don't learn javaScript at all. 

// A promise strat in the pending state which indicate that the promise hasn't complete.it ends eiter fulfilled (successful) or rejected (failed) state.
const books = [
  {
    title: "Book One",
    genre: "Not-Fiction",
    publish: 1945,
    edition: 1987,
  },
  {
    title: "Book Two",
    genre: "Science",
    publish: 1889,
    edition: 1967,
  },
];

// To  create a promise in JavaScript, you use the Promise constructor:

console.log('A');
const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(books.filter((bk) => bk.genre === "Science"));
  }, 2000);
});

promise.then((data) => console.log("B", data));

console.log('C');

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false
    if(!error) {
      resolve(books.filter((bk) => bk.genre === "Not-Fiction"))
    } else {
      reject(`ERROR : someThing went worng`)
    }
  }, 3000);
})

// promiseTwo.then((user) => {
//   return user
// }).then(users => console.log(users))
// .catch((err) => console.log(err))

// Introductionto the JavaScript promise chaining
// The instace method of promise objet such as then(), catch() or finally() returns a separate promise object.Therfore,you can call the promise's instance method on the return Promise.The successively calling methods in this way is referred to as the promise chaining.

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 3 * 100);
})

p.then((result) => {
  console.log(result);
  return result * 2 
}).then((result) => {
  console.log(result);
  return result * 3
}).then((result) => {
  console.log(result);
  return result * 4
})

// returning a Promise
// When you return a value in the then() method, the then() method return a new Promise that immediately resolves to return.
// Also, you can return a new promise in the then() method, like this:
let promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 4 * 1000)
})

promiseThree.then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 2)
    }, 4 * 1000)
  })
}).then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 3)
    }, 4 * 1000)
  })
})