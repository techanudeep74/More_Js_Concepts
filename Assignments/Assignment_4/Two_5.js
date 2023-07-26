const myPromise = () => {
    return new Promise((resolve, reject) => {
        resolve();
    });
}
myPromise()
.then(() => {
    console.log("Promise Kept");
})
.catch(() => {
    console.log("Promise broken");
});
//Promise Kept