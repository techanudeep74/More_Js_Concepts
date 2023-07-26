const positiveIntegers = [2,3,4];
function getProduct(a,b,c=2,d=3){
    return a * b * c * d;
};
console.log(getProduct(...positiveIntegers));

// 72