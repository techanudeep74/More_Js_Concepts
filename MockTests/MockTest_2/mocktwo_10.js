function Parrot(petName){
    this.petName = petName;
}
Parrot.prototype.talk = function(){
    console.log(`${this.petName} is talking`);
}
const parrot1 = new Parrot("Coco");
parrot1.talk();
// Ans Coco is talking