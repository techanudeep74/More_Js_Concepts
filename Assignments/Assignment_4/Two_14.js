const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Resolved!"), 1000);
});
const myFunction = async () => {
    try{
        let result = await promise;
        result = "Got this!";
        console.log(result);
    }catch(error){
        console.log(error);
    }
};
myFunction();
//Got this!