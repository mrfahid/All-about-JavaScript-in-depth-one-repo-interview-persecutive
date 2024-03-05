// introduction to JavaScript Promise.race() static method

// The Promise.race() static method accept a list of promises and return a promise that fulfills or reject as soon there is one promise that fulfills or reject, with the value or reason from that promise.

// 1 Simple JavaScript Promise.race() example
// The folloing create two promise: one resolves in 1 second and the other resolve in 2 second.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`The first promise has resolved`);
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`The second promise has resolved`);
    resolve(20);
  }, 2 * 1000);
});

Promise.race([p1, p2])
  .then((value) => console.log(`Resolved: ${value}`))
  .catch((reason) => console.log(`Rejected: ${reason}`));

// The first promise has resolved
// Resolved: 10
// The second promise has resolved

// Practical JavaScript Promise.race () example

//Suppose that have to show a loading indicator if the data loading process from the server is taking longer than some seconds.

// To achieve this, you can use the Promise.race() static method.if a timeout occurs,you show the loading indicator,otherwise,you show the message.

const DATA_LOAD_TIME = 5000;

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = `Promise.race() Demo`;
      resolve(message);
    }, DATA_LOAD_TIME);
  });
}

// Second, develop a function that shows some contents:

function showContent(message) {
  document.querySelector(`#message`).textContent = message;
}

// This functon can also be used to set the message to blank.

//Third, define the timeout() function returns a promise which rejects when the TIMEOUT is passed.

const TIMEOUT = 500;

function timeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(), TIMEOUT);
  });
}

// Forth, develop a couple of functions that show and hide the loading indicator:

function showLoadingIndicator() {
  document.getElementById(`loader`).className = "loader";
}

function hideLoadingIndicator() {
  document.getElementById(`loader`).className = "";
}

// Fifth, attach a click event listener to the Get Message button.Inside the click handler,use the Promise.race() static method:

// handle button click event
const btn = document.querySelector(`#btnGet`);

btn.addEventListener(`click`, () => {
  // reset UI if users click the 2nd, 3rd, ... time
  reset();

  // show content or loading indicator
  Promise.race([
    getData().then(showContent).then(hideLoadingIndicator),
    timeout(),
  ]).catch(showLoadingIndicator);
});

// Finally, develop a reset() function that hides the message and loading indicator if the button is clicked from the second time.

// reset UI
function reset() {
  hideLoadingIndicator();
  showContent("");
}

