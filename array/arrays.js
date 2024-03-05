// In javaScript, an array is an orederd list of values.Each value is called an element specified by an index.

let train1 = ["wheat", "barley", "potato", "salt", "rooks"];
// console.log(train1[0]);
// console.log(train1[2] = 'rice'); // not effect orginal array
// console.log(train1);

// for loop over arrays
// for(let i = train1.length -1; i >= 0 ; i--) {
//   console.log(train1[i])
// }

// let veggies = ["onion", "parsley", "carrot"];

// console.log(veggies.length);
// console.log(veggies[0]);
// console.log(veggies[2]);

// for(i = 0; i < veggies.length; i++) {
//   console.log(veggies[i])
// }

// let arr = ["fahid", "farhan", "honey"];

// let arrMap = arr.map(
//   // (value, index, array) => console.log(value, index, array) // output
//   /*
//   fahid 0 [ 'fahid', 'farhan', 'honey' ]
//   farhan 1 [ 'fahid', 'farhan', 'honey' ]
//   honey 2 [ 'fahid', 'farhan', 'honey' ]
//  */
// );

// let arrFilter = arr.filter((value, index, array) => {
//   // console.log(value, index, array) // output
// fahid 0 [ 'fahid', 'farhan', 'honey' ]
// farhan 1 [ 'fahid', 'farhan', 'honey' ]
// honey 2 [ 'fahid', 'farhan', 'honey' ]
// })

const books = [
  {
    title: "Book One",
    genre: "Not-Fiction",
    publish: 1945,
    edition: 1987,
  },
  {
    title: "Book Two",
    genre: "Science",
    publish: 1889,
    edition: 1967,
  },
  {
    title: "Book Three",
    genre: "History",
    publish: 1771,
    edition: 1995,
  },
  {
    title: "Book Four",
    genre: "Fiction",
    publish: 1993,
    edition: 2005,
  },
  {
    title: "Book Five",
    genre: "History",
    publish: 1987,
    edition: 2013,
  },
  {
    title: "Book Six",
    genre: "Fiction",
    publish: 2004,
    edition: 2018,
  },
  {
    title: "Book Seven",
    genre: "Science",
    publish: 2011,
    edition: 2020,
  },
  {
    title: "Book Eight",
    genre: "History",
    publish: 1999,
    edition: 2016,
  },
  {
    title: "Book Nine",
    genre: "Science",
    publish: 1914,
    edition: 1976,
  },
  {
    title: "Book Ten",
    genre: "Not-Fiction",
    publish: 1981,
    edition: 2001,
  },
];

// let userBook = books.filter((bk) => bk.genre === 'History');
let userBook = books.filter((bk) => {
  // return bk.publish > 2000
  // return bk.publish < 2000
  // return bk.edition < 2000
  return bk.edition > 2000
  
  } );
// console.log(userBook);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums
                .map((num) => num * 10) // [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
                .map(num => num + 1) // [11, 21, 31, 41, 51, 61, 71, 81, 91, 101];
                .map(num => num / 10) // [1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1];
                .filter(num => num >= 10) // 10.

console.log(newNums);

const total = myNums.reduce((accumulator, currenvalue) => {
  console.log(`accumulator: ${accumulator} and currenvalue: ${currenvalue}`);
  return accumulator + currenvalue
})

console.log(total); // out put
/* 
accumulator: 1 and currenvalue: 2
accumulator: 3 and currenvalue: 3
accumulator: 6 and currenvalue: 4
accumulator: 10 and currenvalue: 5
accumulator: 15 and currenvalue: 6
accumulator: 21 and currenvalue: 7
accumulator: 28 and currenvalue: 8
accumulator: 36 and currenvalue: 9
accumulator: 45 and currenvalue: 10
55
*/