let bus = {
    capacity: 50,
    speed: "80 km/hr",
    start: () => {
        return this;
    }
};
if(bus.start() === bus){
    console.log("this refers to the bus object");
}else{
    console.log("this refers to the window object");
}
//this refers to the window object