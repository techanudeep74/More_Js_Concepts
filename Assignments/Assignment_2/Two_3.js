function Car(color, brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log("Started");
    };
}
Car.stop = function(){
    console.log("Stopped");
};

Car.stop();