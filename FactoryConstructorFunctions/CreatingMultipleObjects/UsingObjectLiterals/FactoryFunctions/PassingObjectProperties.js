function createCar(color, brand){
    return {
        color: color,
        brand: brand,
        start: function(){
            console.log("started");
        }
    };
}
let car1 = createCar("blue", "Audi");
let car2 = createCar("red", "Ferrari");
let car3 = createCar("black", "Benz");

console.log(car1);
console.log(car2);
console.log(car3);