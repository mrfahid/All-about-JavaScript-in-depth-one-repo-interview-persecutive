// Object-orientated programming

let purchase1 = {
  shoes: 100,
  stateTax: 1.5,
  totalePrice() {
    let calculation = purchase1.shoes * purchase1.stateTax;
    console.log(`Total Price ${calculation}`);
  },
};

purchase1.totalePrice();

// this keyword

let purchase2 = {
  shoes: 100,
  stateTax: 1.4,
  totalePrice() {
    let calculation = this.shoes * this.stateTax;
    console.log(`Total Price ${calculation}`);
  },
};

purchase2.totalePrice();

