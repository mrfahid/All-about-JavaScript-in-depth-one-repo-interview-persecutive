// what is data types?
// A data determines the type value that can be stored in a variable.
// there are two data types in javaScript.
/* 
┌─────────┬──────────────┐
│  type   │    type      │
├─────────┼──────────────┤
│primitive│ non-primitive│
│   data  │    data      │
│   types │    types     │
└─────────┴──────────────┘
*/
// primitive data types are immutable their values can't be changed.primitive data types can hold only single value.primitive data tpyes are simple data types. 

// here we can cover primitive dat types.

// number
let number = 23

// null 
let nulls = null

// bigInt 
let bigInt = 200000000000000000000000000000000n

// boolean 
let boolean = true // false

// string
let string = "shah fahid"
let string2 = 'shah fahid'
// let string3 = "shah' fahid' // error Unterminated string literal. plz close if you put "" double cotaions or if you create and put single cotaions.
let string4 = "shah' fahid"

// symbol
let symbol = Symbol('shah fahid') //Description of the new Symbol object.Returns a new unique Symbol value.

// undefined
let undefined;

// console.table([number,null,bigInt,boolean,string,symbol,undefined])

/*
┌─────────┬────────────────────────────────────┐
│ (index) │               Values               │
├─────────┼────────────────────────────────────┤
│    0    │                 23                 │
│    1    │                null                │
│    2    │ 200000000000000000000000000000000n │
│    3    │                true                │
│    4    │            'shah fahid'            │
│    5    │         Symbol(shah fahid)         │
│    6    │             undefined              │
└─────────┴────────────────────────────────────┘
*/

console.table([typeof number,typeof null,typeof bigInt,typeof boolean,typeof string,typeof symbol,typeof undefined]);

/* 
┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    0    │  'number'   │
│    1    │  'object'   │
│    2    │  'bigint'   │
│    3    │  'boolean'  │
│    4    │  'string'   │
│    5    │  'symbol'   │
│    6    │ 'undefined' │
└─────────┴─────────────┘
*/