let evenNumbers1 = [2,4,6];
let evenNumbers2 = [...evenNumbers1];
evenNumbers2[2] = 100;
console.log(evenNumbers1);
console.log(evenNumbers2);