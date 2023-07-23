function Car(color, brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log("Start");
    };
}
console.log(Object.getPrototypeOf(Car));