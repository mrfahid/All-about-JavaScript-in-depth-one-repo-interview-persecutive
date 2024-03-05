const jsonStr = '{"greeting":"hello"}';
let jsonObj = JSON.parse(jsonStr);
jsonObj.greeting = "hello world";

console.log(jsonStr);

console.log(jsonObj.greeting);

const data = {
  first: "jhon",
  age: 20,
};

let Json = JSON.stringify(data);

console.log(Json);
Json.age;
console.log(data.age);
