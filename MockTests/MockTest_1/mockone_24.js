const compositeNumber = [2,4,6,8,9];
function getProduct(a,b,rest){
    return a * b * rest;
}
console.log(getProduct(...compositeNumber));
// 48
