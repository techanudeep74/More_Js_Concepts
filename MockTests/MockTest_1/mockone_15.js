const driver = {
    name: "Jack",
    drive: function(){
        setTimeout(() => {
            console.log(this);
        }, 1000);
    }
};
driver.drive();
const lion = {
    roar: () => {
        setTimeout(() => {
            console.log(this);
        },1000);
    }
};
lion.roar();
/*
Statement 1: In the drive method, this refers to the driver object.
Statement 2: In the roar method, this refers to the window object.
*/