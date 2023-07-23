function Car(color, brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log("Started");
    };
}
console.log(Car.name);
console.log(Car.length);
console.log(typeof(Car));