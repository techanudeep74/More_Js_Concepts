const url = "h://kes/random";
const fetchData = async () => {
    try{
        const fetchResults = await fetch(url);
        console.log("Fetching Done");
    }catch(error){
        console.log(error);
    }
};
fetchData();
// The error is loged in to console
