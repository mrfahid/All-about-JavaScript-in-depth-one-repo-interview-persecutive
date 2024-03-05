// Anagram in react
// first of all we need two string
// both strings are equal length and same characters
// "fmmir" and "fmmir"

// frist we can do check both strings are equal length and same characters
// then we create a for of loop and write logic

// function checkAnagram(string1, string2) {
//   if (string1.length != string2.length) {
//     console.log("Not equal length");
//     return false;
//   }

//   let match = {};
//   for (const letter of string1) {
//     match[letter] = (match[letter] || 0) + 1;
//   }

//   console.log(match);
//   for (const letter of string2) {
//     if (!match[letter]) {
//       console.log("length is equal but characters not same");
//       return false;
//     }

//     match[letter] -= 1;
//   }
//   console.log(match);
//   return true;
// }

// const anagram = checkAnagram("fmmirr", "fmmirv");
// console.log(anagram);

// add an element to the array data structure ?
// make an array = [3, 44, 22, 12, 0, 88, 64]
// then we make  a function that take three arguments

// const array = [3, 44, 22, 12, 0, 88, 64]

// const addElementArr = (array, position ,element) => {
//   for (let i = array.length - 1; i >= 0 ; i--) {
//     if(i >= position) {
//       array[i + 1] = array[i]
//       if(i === position) {
//         array[i] = element
//       }
//     }
//   }
// }

// addElementArr(array, 4, 20000)
// console.log(array);
let data = [33, 44, 34, 55, 77, 56, 80];

let position = 3;
function deleteByIndex(array, position) {
  for (let i = position; i < data.length; i++) {
    data[i] = data[i + 1];
  }
  data.length = data.length - 1;
}
deleteByIndex(data, 2);
console.log(data);

function Anagram(string1, string2) {
  if (string1.length != string2.length) {
    console.log("length is not equal");
    return false;
  }

  let match = {};
  for (const letter of string1) {
    match[letter] = (match[letter] || 0) + 1;
  }

  for (const letter of string2) {
    if (!match[letter]) {
      console.log("length is equal but characters not same");
      return false;
    }

    match[letter] -= 1;
  }
  return true;
}

const anagram = Anagram(
  "success is the best revenge",
  "success is the best revenge"
);
console.log(anagram);

function addElementArr(array, position, element) {
  for (let i = array.length -1; i >= 0; i--) {
    if (i >= position) {
      array[i + 1] = array[i];
      if (i === position) {
        array[i] = element;
      }
    }
  }
}

addElementArr(data, 0, 20000)
console.log(data);