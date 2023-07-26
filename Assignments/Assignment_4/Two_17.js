const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Nailed it!!");
        }, 1000);
    });
};
myPromise()
.then((fromResolve) => {
    console.log(fromResolve);
})
.catch((fromReject) => {
    console.log(fromReject);
});
// Nailed it!!