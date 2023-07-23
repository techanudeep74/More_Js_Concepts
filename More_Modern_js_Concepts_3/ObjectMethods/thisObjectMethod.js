let car = {
    color: "blue",
    brand: "Mahindra Thar",
    start: function(){
        console.log(this);
    }
};
car.start();