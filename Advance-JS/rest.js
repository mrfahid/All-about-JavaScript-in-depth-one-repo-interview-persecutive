// rest operator is part of andvance javaScripe (ES6).
// it`s very simple operator.

function culculateCartPrice1(num, num2) {
  return `${num} ${num2}`
}
function culculateCartPrice(num, num2, ...nums){
  return `${num} ${num2} ${nums} `
}

console.log(culculateCartPrice1(100, 330, 44, 55, 66, 77)); // 100 330 
console.log(culculateCartPrice(100, 330, 44, 55, 66, 77)); // [ 100, 330, 44, 55, 66, 77 ]


