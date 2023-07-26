let Car = {
    color: "Blue",
    brand: "Audi",
    start: function(){
        return this;
    }
}
if(Car.start() === Car){
    console.log("This refers to the car object");
}else{
    console.log("this refers to the window Object");
}
//This refers to the car object