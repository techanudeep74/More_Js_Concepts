function sum(a, b=2, c=5){
    return b+c;
}
let evenNumbers1 = [4,6];
let evenNumbers2 = [2,...evenNumbers1, 8];
console.log(sum(...evenNumbers2));
//10