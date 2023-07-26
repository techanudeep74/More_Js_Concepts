function Refrigirator(model, price){
    this.model = model;
    this.price = price;
    this.getModel = function(){
        console.log(this.model);
    };
    this.getPrice = () => {
        console.log(this.price);
    };
}

let refrigirator = new Refrigirator("LG 679", 79990);
refrigirator.getModel();
refrigirator.getPrice();
//LG 679 79990