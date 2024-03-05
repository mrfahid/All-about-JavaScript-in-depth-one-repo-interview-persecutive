// creating own APIs
const APIs = [
  { user: 1, userName: "shah fahid" },
  { user: 2, userName: "Honey" },
  { user: 3, userName: "Farhan" },
];
// function API() {
//   setTimeout(() => {
//     APIs.map( ( name ) => {
//       let data = name.userName;
//       console.log(data);
//     })
//   }, 0);
// }
let data
const requestUrl = APIs.map((name) => {
  data = name.userName;
});
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = Object(this.responseText);
    console.log(typeof data);
    console.log(data);
  }
};
xhr.send();
