let primeNumbers1 = [3,5,7];
let primeNumbers2 = [...primeNumbers1];
primeNumbers2.push(11);
console.log(primeNumbers2);
console.log(primeNumbers1);
// [ 3, 5, 7, 11 ]   [ 3, 5, 7 ]