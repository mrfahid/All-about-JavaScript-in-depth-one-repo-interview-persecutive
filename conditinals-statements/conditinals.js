// conditinals is very important topic in javaScript you use almost every code if you build real world projest. even i say you see every code conditinals steatements.

// it's very simple and fun to learn.
// I cover three mojer conditinals but have some other conditinals you search google or ask chatgpt and learn.

// if else elseif conditinal statement
let age = 18
if (age >= 18) {
  console.log('you can drive a car'); // you can drive a car
} else {
  console.log("you can't drive a car");
}

let time = "7am"
if (time >= "7am") {
  console.log("lunch time"); // lunch time
} else if(time <= "9am") {
  console.log("office time");
} else{
  console.log('home');
}

// tarnary 
let apple = ''
let tarnary = apple == "" ? "red": "green" // red
console.log(tarnary);

// switch statement
let orange = ''
switch (orange) {
  case 'orange':
    console.log('orange');
    break;
  case "apple":
    console.log('apple');
    break
  default:
    console.log("nothing");
    break;
} // guse the out put 
