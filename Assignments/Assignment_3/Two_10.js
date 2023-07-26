function Animal(name, hungry){
    this.name = name;
    this.hungry = hungry;
}

Animal.prototype.isHungry = function(){
    this.hungry === "Yes" ? console.log("Serve Food") : console.log("Play");
};

const animal1 = new Animal("dog", "Yes");
const animal2 = new Animal("cat", "No");

animal1.isHungry();
animal2.isHungry();

// Server Food Play
