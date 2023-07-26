function SmartWatch(price){
    this.price = price;
    this.monitor = function(){
        console.log(this);
    }
}
const smartwatch1 = new SmartWatch(2000);
smartwatch1.monitor();

function ThreadMill(color){
    this.color = color;
    this.start = function(){
        console.log(this);
    }
}
const threadmill1 = new ThreadMill("blue");
threadmill1.start();
