// Promise.all()
// The promise.all() static method accepts a list of Promises and returns a promise that:

// 1 resolves when every input Promise has resolved or
// 2 rejected when any of the input promise has rejected.

// JavaScript Promise.all() examples
// let's take some example to understant how the Priomise.all() works.

// 1 resoleved promise example
// The following promise resolve to 10, 20, and after 1, 2, and 3 seconds. We use the setTimeout() to simulate the asynchronous operations:

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(`The first promise has resolve`);
//     resolve(10);
//   }, 1 * 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(`The second promise has resolved`);
//     resolve(20);
//   }, 2 * 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(`The third promise has resolved`);
//     resolve(30);
//   }, 3 * 1000);
// });

// To  wait for all three promise to resolve,you use the Promise.all() method:

// Promise.all([p1, p2, p3]).then((results) => {
//   const total = results.reduce((p, c) => p + c);

//   console.log(`Results: ${results}`);
//   console.log(`Toltal: ${total}`);
// });

// The first promise has resolve
// The second promise has resolved
// The third promise has resolved
// Results: 10,20,30
// Toltal: 60

// 2 Rejected promises example

// The Promise.all() returns a Promise that is rejected if any of the input promises are rejected.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`The first promise has resolved`);

    resolve(10);
  }, 1 * 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`The second promise has rejected`);

    reject(`Failed`);
  }, 2 * 1000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`The third promise has resolved`);

    resolve(30);
  }, 3 * 1000);
});

Promise.all([promise1, promise2, promise3])
.then(console.log) // never execute
.catch(console.log)

// output
// The first promise has resolved
// The second promise has rejected
// Failed
// The third promise has resolved

