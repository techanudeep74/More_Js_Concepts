const myPromise = new Promise((resolve, reject) => {
    console.log("Blue");
});
console.log("Green");
myPromise
.then(() => {
    console.log("Ornage");
});
console.log("White");
//Blue
//Green
//White