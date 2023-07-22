function sum(a,b,c=5){
    return b * c;
}
let numbers = [2,3];
console.log(sum(...numbers,4));
console.log(sum(...numbers));

