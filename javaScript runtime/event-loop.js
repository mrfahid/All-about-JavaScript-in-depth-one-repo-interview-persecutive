// Event Loop

// JavaScript single-threaded model

// JavaScript is a single-threaded programming language.In other words,it can do only one thing at a time.

// JavaScript engine executes a script from the top and works its way down creating execution contexts and pushing and poping function onto and off the call stack.

// If you have a function that takes a long time to execute,then you cannot do anything on the web brower during the function 's execution.The webpage just hangs.

// A function that takes a long time to execute is know as a blocking function.Technically,the blocking function block all the interactions with the webpage such as mouse click.

// some examples of blocking function are the function that download files frome a remote server or function that call an API from an external server.

function task(message) {
  // emulate time consuming task
  let num = 10000000;
  while (num > 0) {
    num--;
  }
  console.log(message);
}

// console.log("Start script...");
// task("Download a file");
// console.log("Done!");


// In this example, we have a big
// while
// loop inside the task() function that emulates a time-consuming task.
// The task() function is a blocking function.

// The script just hangs for a few seconds (depending on how fast the computer is) and issues the following output:

// Callbacks to the rescue

// To prevent blocking functions from blocking other activities, you typically wrap them in callback function which can be executed later.For example.

console.log("Start downloading...");

setTimeout(() => {
  task('Download a file')
}, 2 * 1000);

console.log('Done!');

// In this example, you will see the message 'start downloading...' and 'Done!' immediately.And ofter a while,you will see the message 'Download a file'.

// The web browser also has other components,not just the JavaScript engine.When you make a call to the setTimeout() function,an AJAX call,or click a button,the web brower is capable of doing these activities concurrently and asynchrononusly.

// The setTimeout(),AJAX calls, and DOM events are parts of Web APIs of the web browser.

// In our example,when setTimeout() function is called,it is placed on the call stack and the Web API creates a timer that will expire in 2 second.

// Then the task() function is then placed into a queue called callback queue or task queue:

// The event loop is a constantly runing process that monitors both the callback queue and the call stack. 

// If the call stack is not empty,the event loop watits until it is empty and places the next function frome the callback queue to the call stack.If the callback queue is empty,nothing will happen:

// See another example:

console.log('Hi');

setTimeout(() => {
  console.log('Execute immediately');
}, 0)

console.log('Bye');

// In this example,the timeout is 0 second so the message 'Execute immediately.' should appear before the message 'Bye'. However,it is not the case.

console.log('Execute immediately2');

// Is placed on the callback queue and executed only when the call stack is empty.In other words,it is excuted only ofter the console.log('Bye) is completed.


