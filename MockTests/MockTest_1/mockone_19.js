const room1 = {length: 300, height: 200};
const room2 = {length: 100, width: 150};
const room3 = {...room1, ...room2};
console.log(Object.getOwnPropertyNames(room3));
// [ 'length', 'height', 'width' ]