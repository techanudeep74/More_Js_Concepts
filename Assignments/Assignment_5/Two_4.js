const numbersArray = [4,2,3,-4, -5];
const total = numbersArray.reduce((sum, value) => {
    return sum + value;
});
console.log(total);
//0
