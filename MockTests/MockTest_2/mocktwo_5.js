function task(){
    return new Promise((rej, res) => {
        res();
    });
}
let promise = task();
promise
.then(function(){
    console.log("First task");
})
.then(function(){
    console.log("Second task");
})
.then(function(){
    console.log("Third task");
})
.catch(function(){
    console.log("Ohh! Error");
})
// Ohh! Error