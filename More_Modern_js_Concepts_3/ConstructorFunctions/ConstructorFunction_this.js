function Car(color, brand){
    this.color = color;
    this.brand = brand;
    this.start = function(){
        console.log(this);
    };
}
let car1 = new Car("Mahindra Thar", "Mahindra");
car1.start();
//In constructor function this refers to the instance objects