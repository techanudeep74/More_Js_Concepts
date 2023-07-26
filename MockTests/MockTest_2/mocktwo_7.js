const url = "https://apis.ccbp.in/jokes/random";
fetch(url)
.then((response) => {
    console.log("Hello!");
});
alert("Good Morning");
/*
"Hello!" is logged in the console.
"Good Morning" is displayed on the screen.
The fetch request completes (asynchronously).
*/