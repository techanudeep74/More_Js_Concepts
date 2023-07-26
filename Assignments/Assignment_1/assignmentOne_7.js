function sumOfNumbers(firstArgument, ...others){
    let sum = firstArgument;
    for(let arg of others){
        sum = sum + arg;
    }
    console.log(sum);
}
sumOfNumbers(10,20,30,40,50);
sumOfNumbers(1,3,5);
// 150 9
