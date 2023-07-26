function sum1(a,b){
    return a + b;
}
const sum2 = function(a,b){
    return a + b;
};
if(sum1(5,4) === sum2(5,4)){
    console.log(`Both the functions returned ${sum1(5,4)}`);
}
else{
    console.log(`Both the function returned different values`);
}
// Both the functions returned 9
