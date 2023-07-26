function Car(color, brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log("Started");
    };
}
const car1 = new Car("Blue", "tesla");
car1.start();