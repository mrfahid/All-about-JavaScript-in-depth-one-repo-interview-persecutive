// Sending a Request
// The fetch() requires only one parameter which is the URl of the resource that you want to fetch:
// let response = fetch(URL)

// The fetch() method returns a Promise so you can use the then() and catch() methods to handle it:

// Reading the Response
// If the contents of the response are in the raw text format, you can use the text() method.The text() method returns a Promise that resolve with the complete contents of the fetched resource:
// const user ={
//   name: "fahid"
// }

// fetch('readme.txt')
// .then(response => response.text())
// .then(data => console.log(data))

// In practice, you often use the async / await with the fetch() method like this:

// async function fetchText() {
//   let response = await fetch('readme.txt')
//   let data = await response.text()
//   console.log(data);
// }

// fetchText()

// Handling the status code of the Response

// The Response object provides the status code and status text via the status and statusText properties.When a request is successfull, the status code 200 and status text is OK:

// async function fetchText() {
//   let response = await fetch('readme.txt');

//   console.log(response.status);
//   console.log(response.statusText);

//   if (response.status === 200) {
//     let data = await response.text();
//     console.log(data);
//   }
// }

// fetchText();

// If the requested resource doesn't exist, the response code is 404:

// let response = await fetch(`non-existence.txt`)

// console.log(response.status);
// console.log(response.statusText);

// JavaScript Fetch API

// In the app.js,we'll use the fetch() method to get the user data and render the data inside the <div> element with the class container.

// First, declare the getUser() function that fetches users.json from the server.

async function getUser() {
  let url = "users.json";
  try {
    let res = await fetch(url);
    console.log(res);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

// The, develop the renderUser() function that renders User data:

async function renderUsers() {
  let user = await getUser();
  console.log(user);
  let html = "";
  user.forEach((user) => {
    let htmlSegment = `<div class="user">
                <img class="logos"
                  src="${user.profileURl}">
                <h2>
                  ${user.firstName} ${user.lastName}
                </h2>
                <p>
                  ${user.gender}
                </p>
                <div class="email">
                  <a href="email:${user.email}">${user.email}</a>
                </div>
              </div>`;

    html += htmlSegment;
    console.log(html);
  });
  let container = document.querySelector(".container");
  container.innerHTML = html;
}

renderUsers();
