// console.log(this); // output {} in node this kyeword refer to empty object.
// console.log(this); // output in browser this refer to the window object.
// VM93:1 Window {window: Window, self: Window, document: document, name: '', location: Location, …}

function abc() {
  name: "fahid";
  // console.log(this); // <ref *1> Object [global]
  setImmediate(() => {
    // console.log(this.name); // undefined
  }, 0);
  // console.log(this.name); // undefined
}

abc();

const obj = {
  name: "fahid",
  call() {
    // console.log(`here this refer to the current context (object) ${this.name}`); // { name: 'fahid', call: [Function: call] }
  },
};

console.log(obj);
