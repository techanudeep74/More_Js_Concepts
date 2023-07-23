function Car(color, brand){
    this.color = color;
    this.brand = brand;
    this.start = () => {
        console.log(this);
    };
}
let car1 = new Car("Black", "Thar");
console.log(car1);