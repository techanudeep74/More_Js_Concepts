function Location(name, city){
    this.name = name;
    this.city = city;
};
let location1 = new Location("Taj Mahal", "Agra");
let location2 = new Location("Eiffel Tower", "Paris");
console.log(Object.getPrototypeOf(location1) === Object.getPrototypeOf(location2));