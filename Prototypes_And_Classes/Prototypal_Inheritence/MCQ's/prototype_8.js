function Car(color, brand){
    this.color = color;
    this.brand = brand;
};
Car.prototype.start = function(){
    console.log("started");
};
let car1 = new Car("blue", "Audi");
let car2 = new Car("black", "BMW");
car1.start();
car2.start();