const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Failed"), 1000);
});

const myFunction = async () => {
    try{
        const result = "Not Again!";
        result = await promise;
        console.log(result);
    }catch(error){
        console.log(error);
    }
};
myFunction();
// TypeError: Assignment to constant variable.