let x = { cost: 5 };
let y = x;
let z = { cost: 20 };
y.cost = 10;
x=z;
console.log(x.cost);
console.log(y.cost);
console.log(z.cost);