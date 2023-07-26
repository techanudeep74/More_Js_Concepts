function Car(color, brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log("started");
    }
}
console.log(Object.getPrototypeOf(Car) === Function.prototype);
//true
