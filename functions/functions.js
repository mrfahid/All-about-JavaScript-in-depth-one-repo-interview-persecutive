// functions is a block of code that prefoms a specfic task or return values.
// All function in javaScript are object. They are instances of the function type.Since functions are object,they have peoperties and methods like other obbjects.
function addTaxprices(taxrate, ...itemsBought) {
  return itemsBought.map((item) => taxrate * item);
}

const shopingCart = addTaxprices(1.1, 46, 89, 35, 79);
// console.log(shopingCart); // output [ 50.6, 97.9, 38.5, 86.9 ]

function loginUser(username) {
  return `${username} just logged in`;
}

// console.log(loginUser("shah fahid"));  // shah fahid just logged  in
// console.log(loginUser("")); //  just logged in
// console.log(loginUser()); // undefined just logged in
// console.log(loginUser(123)); // 123 just logged in

function loginUser2(username) {
  if (
    username === undefined ||
    username === "" ||
    typeof username === "number"
  ) {
    console.log("please enter a valid user name");
  } else {
    return `${username} just logged in`;
  }
}

// console.log(loginUser2("shah fahid"));  // shah fahid just logged in
// console.log(loginUser2("")); //  please enter a valid user name
// console.log(loginUser2()); // please enter a valid user name
// console.log(loginUser2(123)); // please enter a valid user name

const product = {
  name: "shirt",
  price: 999,
};

function handleObject(anyobject) {
  // console.log(`product name is: ${anyobject.name} and price is: ${anyobject.price}`); // product name is: shirt and price is: 999
}

// handleObject(product) // An object pass as an argument
handleObject({
  name: "trouser",
  price: "$899",
});

const myArray = [200, 300, 100];

function returnSecondValue(getArray) {
  return getArray[1]; // 300
}

// console.log(returnSecondValue(myArray))

// socpe

function one() {
  let name = "fahid";

  function two() {
    let website = "learn me.edu";
    // console.log(name);
  }

  // console.log(website);

  two();
}

one()

// abc() // this is a function declartion
function abc() {
  // console.log('this is a function declartion');
}


// abcde() // ReferenceError: Cannot access 'abcde' before initialization

let abcde = function() {
  // console.log('this is a function expression'); 
}

// abcd() // TypeError: abcd is not a function

var abcd = function() {
  // console.log('this is a function expression');
}

