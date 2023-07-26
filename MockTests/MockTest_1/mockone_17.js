const chef = {
    name: "Peter",
    cook: () => {
        console.log(this);
    }
};
chef.cook();
function run(){
    console.log(this);
}
run();
/*
Statement 1: In the cook method, this refers to the window object.
Statement 2: In the run function, this refers to the window object.
*/