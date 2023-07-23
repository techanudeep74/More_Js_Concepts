let numbers = new Array(1,2,3);
let alphabets = new Array("a", "b", "c");
console.log(numbers === alphabets);
console.log(Object.getPrototypeOf(numbers) === Object.getPrototypeOf(alphabets));