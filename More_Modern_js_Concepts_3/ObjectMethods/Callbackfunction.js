let car = {
    color: "blue",
    brand: "Audi",
    start: function(){
        setTimeout(function(){
            console.log(this);
        }, 1000);
    }
};
car.start();