// micro task Queue // higher priority
fetch('randomapi.com').then(() => {
  console.log('a');
}).catch(() => {
  console.log('url is not found');
})

console.log("b"); 

// task Queue or callback queue // lower priority
setTimeout(() => {
  console.log('c');
})

console.log('d');
console.log('e');

// out put 
// b
// d
// e
// url is not found 
// c

// this piece of code demonstrate you how works javascript behind the scenes and how to do executes JS code.I suggest you use breakpoints and open debuger when you understand as well.

// it happen because in the microtask queue if one executes and create another callback function it continuosly happens and microtask queue is not free.due to its higher priority, it's run again and again whenever the call stack is free and there is no chance of the callback queue to run. due to this callback queue going into starvation