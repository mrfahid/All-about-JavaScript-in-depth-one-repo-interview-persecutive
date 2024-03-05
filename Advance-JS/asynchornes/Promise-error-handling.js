// Promise Error Handling

// Suppose that you have a function called geUserById() that returns a Promise:
// function getUserById(id)  {
//   return new Promise((resolve, reject) => {
//     resolve({
//       id: id,
//       username: `admin`
//     })
//   })
// }

// Nromal error

// first, change the getUserById() function to throw an error outside the promise:
function getUserById(id) {
  if(typeof id !== `number` || id <= 0){
    throw new Error (`Invaild id argument`)
  }
}

return new Promise((resolve,reject) => {
  resolve({
    id: id,
    username: `admin`
  })
})

// getUserById(`a`) 
// .then(user => console.log(user.username))
// .catch(err => console.log(err))

try{
  getUserById(`a`)
  .then(user => console.log(user.username))
  .catch(err => console.log(`Caught by .catch ${err}`))
}
catch(err){
  console.log(`Caught by try/catch ${err}`);
}