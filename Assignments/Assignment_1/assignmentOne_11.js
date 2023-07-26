let array1 = [2,4,5,6];
let array2 = [1,3,4,5];
let combinedArray = [0, ...array1, 7, ...array2];
let result = combinedArray[2] + combinedArray[8];
console.log(result);
// 8
