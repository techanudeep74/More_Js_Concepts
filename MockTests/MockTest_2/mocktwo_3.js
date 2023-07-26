const metroStation1 = new MetroStation("Secunderabad", true);
metroStation1.runMetro();

const MetroStation = function(place, isOpen){
    this.place = place;
    this.isOpen = isOpen;
    this.runMetro = () => {
        console.log(`Metros at ${this.place} metro station are running`);
    };
};
// Reference Error

