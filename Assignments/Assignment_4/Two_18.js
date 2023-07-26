const Url = "https://apis.ccbp.in/jokes/random";
fetch(Url)
.then((response) => {
    return response.json();
})
.then((jsonData) => {
    console.log("Data Loaded");
});
console.log("Data Fetched");
//Data Fetched
//Data Loaded