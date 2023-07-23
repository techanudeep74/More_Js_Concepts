function Dog(name, breed){
    this.name = name;
    this.breed = breed;
};
Dog.prototype.dogBreed = function(){
    return `${this.name} belongs to the ${this.breed}`;
};
let dog1 = new Dog("Akhira", "German Shepherd");
let dog2 = new Dog("Bhageera", "Retriever");
console.log(dog1.dogBreed());
console.log(dog2.dogBreed());
