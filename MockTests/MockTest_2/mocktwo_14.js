function Ferrari() {}

Ferrari.prototype.launch = function(color, price){
    this.color = color;
    this.price = price;
};
const ferrari1 = new Ferrari();
ferrari1.launch("Grey", "3.76 Cr");

console.log(Object.getOwnPropertyNames(ferrari1));
//[ 'color', 'price' ]