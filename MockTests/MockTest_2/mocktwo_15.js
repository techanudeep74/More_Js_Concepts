function Cat(petName, breed){
    this.petName = petName;
    this.breed = breed;
}

Cat.prototype.eat = function(){
    return `${this.petName} is eating`;
}

const cat1 = new Cat("Kitty", "Birman");
const cat2 = new Cat("Stella", "Turkish Angora");

if(Object.getPrototypeOf(cat1) === Object.getPrototypeOf(cat2)){
    console.log("Both instances refer to the same prototype");
}

if(Object.getPrototypeOf(cat1) === Cat.prototype){
    console.log("Cat prototype is shared across all its instances");
}
//Both instances refer to the same prototype
//Cat prototype is shared across all its instances