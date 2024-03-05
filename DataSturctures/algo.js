let data = [33, 44, 34, 55, 77, 56, 80]
  
let position = 5

for(let i = position; i < data.length; i++) {
  data[i] = data[i + 1]
}
data.length = data.length -1
console.log(data);