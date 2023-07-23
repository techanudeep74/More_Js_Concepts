function createCar(name){
    let car = {
        name: name,
        color: "Blue"
    };
    return car;
}
let car1 = createCar("Audi");
let car2 = createCar("Ford");
console.log(car1.name);
console.log(car2.color);