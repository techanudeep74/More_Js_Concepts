function sum(x,y = 10, z = 5){
    return y + z;
}
const numbers = [4,6];
console.log(sum(...numbers));
//11