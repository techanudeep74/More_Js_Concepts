let redPen = { cost: 5 };
let bluePen = redPen;
bluePen.cost = 10;
console.log(`redPen cost is ${redPen.cost}`);
console.log(`bluePen cost is ${bluePen.cost}`);