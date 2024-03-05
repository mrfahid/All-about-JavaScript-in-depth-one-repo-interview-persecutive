function SetUsername(username) {
  // complex DB calls
  this.username = username
  console.log('called');
}

function createUser(username, email, password) {
  SetUsername(this, username) 
}