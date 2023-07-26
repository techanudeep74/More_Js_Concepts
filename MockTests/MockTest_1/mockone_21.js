let apple = {
    cost: 5
};
let banana = apple;
let mango = {
    cost: 20
};
banana.cost = 10;
console.log(apple.cost);
console.log(banana.cost);
banana = mango;
console.log(apple.cost);
console.log(banana.cost);
// 10 10 10 20