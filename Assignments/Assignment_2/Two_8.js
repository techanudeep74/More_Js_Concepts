const bus = {
    type: "AC Semi Seater",
    capacity: 52,
    speed: "80 km/hr",
    start() {
        setTimeout(function(){
            console.log(this.speed);

        }, 1000);
    },
};
bus.start();