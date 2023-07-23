let cars = ["Audi", "BMW", "Ferrari", "Benz"];
let car = {
    color: "blue",
    brand: "Audi",
    start: function(){
        let audiIndex = cars.findIndex((car) => console.log(this));
    }
};
car.start();