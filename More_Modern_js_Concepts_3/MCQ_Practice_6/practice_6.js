let x = { score : 5 };
let y = x;
let z = { score: 20 };
y.score = 10;
y = z;
console.log(y.score);