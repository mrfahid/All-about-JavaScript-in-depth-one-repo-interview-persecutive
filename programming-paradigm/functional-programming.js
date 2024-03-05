// data separated from funtions
let shose = 100;
let stateTax = 1.2;
function totalPrice(price, tax) {
  return price * tax;
}

console.log(totalPrice(shose, stateTax));

// funtional programming
let currencyOne = 100;
let currencyTwo = 0;
let currencyRate = 1.3;

function currencyConvert(amount, rate) {
  return amount * rate;
}

currencyTwo = currencyConvert(currencyOne, currencyRate);

console.log(currencyTwo);

// recuretion
let counter = 3;
function example() {
  console.log(counter);
  counter = counter - 1;
  if (counter === 0) return;
  example();
}

example();
