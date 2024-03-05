// ES5 strings
let nomultiline = "No multiLine strings in ES5";
console.log("Did you know", nomultiline);

// ES6 multi-line template litrals

let multiLine = `
    Using ES6
    backticks,
    multi-line
    strings are
    possible! 
`;

console.log(multiLine);

console.log(`${multiLine} ${nomultiline}`);