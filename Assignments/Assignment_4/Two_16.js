const function1 = () => {
    console.log("Yes!!");
};
const function2  = () => {
    setTimeout(() => console.log("This time"), 1000);
};

const function3 = () => {
    console.log("Made it");
};

function1();
function2();
function3();
//Yes!!
//Made it
//This time