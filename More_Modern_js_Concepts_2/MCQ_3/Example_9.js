let sumFunction1 = function(a,b){
    let sum = a + b;
    return sum;
};
let sumFunction2 = (a,b) => {
    let sum = a + b;
    return sum;
};
let result = sumFunction1(4,3) === sumFunction2(4,3) ? "same" : "different";
console.log(`Both the functions returned ${result} values`);

