let car = {
    color: "Red",
    brand: "Hyundai",
    getBrand: function(){
        console.log(this.brand);
    },
    getColor: () => {
        console.log(this.color);
    }
};
car.getBrand();
car.getColor();