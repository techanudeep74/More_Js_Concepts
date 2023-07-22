function add(a, b, c){
    return a + b + c;
}
let numbers1 = [2,4,6];
let result1 = add(...numbers1);

let numbers2 = [2,4,6,8,10];
let result2 = add(...numbers2);

console.log(result2);
console.log(result1);