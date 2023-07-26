const realUser = "Harry";
const validateUser = (loggedUser) => {
    return new Promise((resolve, reject) => {
        realUser === loggedUser ? resolve("Welcome!") : reject("Invalid User");
    });

};
const myPromise = async () => {
    try{
        const result = await validateUser("Hari");
        console.log(result);
    }catch(error){
        console.log(error);
    }
};
myPromise();
// Invalid User