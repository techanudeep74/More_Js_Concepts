function getValue(firstArgument, secondArgument, ...rest){
    return rest[2];
}
let oddNumbers = [1,3,5,7,9];
console.log(getValue(...oddNumbers));