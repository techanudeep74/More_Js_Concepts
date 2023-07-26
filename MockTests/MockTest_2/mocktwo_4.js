const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    reject("error");
});
promise1.then(() => {
    console.log(2);
});
promise1.catch(() => {
    console.log(4);
});
console.log(3);
// 1 3 4
