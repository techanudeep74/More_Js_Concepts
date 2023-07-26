const myPromise = () => {
    return new Promise((resolve, decline) => {
        setTimeout(() => {
            decline();
        },1000);
    });
};
myPromise()
.then(() => {
    console.log("Success");
})
.catch(() => {
    console.log("Error");
});
// Error
