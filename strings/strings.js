// strings
// javaScript string are primitive values.JavaScript strings are immutable.it means that if you process a string, you will always get a new string.The original string doesn't change.
// To create literal string in javaScript,you use single quotes or double qoutes.

let greeting = "Howdy";

// console.log(greeting.length)

// console.log(greeting[0])
// console.log(greeting[3])

for(let i = 0; i < greeting.length; i++) {
  // console.log(greeting[i]);
}

// Escaping special characters
// To escape special character,you use backslash\character.
// for example
// window line break: '\r\n'
// Unix line breack: '\n'
// Tab: '\t'
// Backslash '\'

let str = "i'm a \nstring";
// console.log(str);

// string methods 
let type = "javaScript is programming"

// console.log(type.charAt(5)); // c

// console.log(type.toUpperCase()); //JAVASCRIPT IS PROGRAMMING
// console.log(type.toLowerCase()); // javascript is programming

// console.log(greeting.concat(type)); // Howdy javaScript is programming

// substr(startIndex,[lenght])
// console.log(type.substr(0,10)); // javaScript
// console.log(type.substr(14,11)); // programming

// substring(stratIndex,endIndex)
// console.log(type.substring(0,10));// javaScript

// indexOf(substring,[fromIndex])
// console.log(type.indexOf('is')); // 11
// console.log(type.indexOf('is',11)); // 11

// lastIndexOf(substring,[fromIndex])
// console.log(type.lastIndexOf("programming")); // 14

// removing whitespace 
// trim method
// let str2 = "   trim    "
// console.log(str2.trim()); //trim
// console.log(str2.trimStart()); //trim    
// console.log(str2.trimEnd()); //   trim

// replace() method 
// console.log(type.replace(/javaScript/g, 'python')); // python is programming

// split([separator,[,limit]])
// console.log(type.split(''));
// /* [
//   'j', 'a', 'v', 'a', 'S', 'c',
//   'r', 'i', 'p', 't', ' ', 'i',
//   's', ' ', 'p', 'r', 'o', 'g',
//   'r', 'a', 'm', 'm', 'i', 'n',
//   'g'
// ]*/
// console.log(type.split(' ')); //[ 'javaScript', 'is', 'programming' ]
// console.log(type.split(' ',2)); // [ 'javaScript', 'is' ]

// let paragraph = "Good Morning! How are you? This is John. John is my friend"
// let sentences = paragraph.split(/[!,?,.]/)
// console.log(sentences); // out put
/*
[
  'Good Morning',
  ' How are you',
  ' This is John',
  ' John is my friend'
]
*/

// slice
console.log(type.slice(0,10)); // javaScript