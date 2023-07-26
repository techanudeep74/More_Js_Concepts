function Bottle(cost, color){
    this.cost = cost;
    this.color = color;
    this.status = function(){
        console.log("Sold");
    };
}
const bottle = new Bottle(150, "Blue");
console.log(Bottle.name);