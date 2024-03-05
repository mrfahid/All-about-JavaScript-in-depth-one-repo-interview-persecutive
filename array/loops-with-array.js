// foEach() 
// JavaScript Array provide the forEach() method that allows you to run a function on every element.
// code example 

let arr = [2, 3, 5, 6, 7, 8];

// arr.forEach(e => console.log(e))  // 2 3 5 6 7 8
let newNums = []
arr.forEach(num =>  {
  if(num > 3) {
    newNums.push(num)
  }
})
// console.log(newNums); // [ 5, 6, 7, 8 ]

// some other example forEach() 
// uses a contextObject.
function Counter(){
  this.count = 0;
  let self = this;
  return {
    increase: function () {
      self.count++;
    },
    current: function() {
      return self.count;
    },
    reset() {
      self.count = 0
    }
  }
}

let counter = new Counter();
let numbers = [1, 2, 3, 4, 5]
let sum = 0;
numbers.forEach(function (e){
  sum += e;
  console.log(sum);
  this.increase();
}, counter);

console.log(sum);
console.log(counter.current());