/*
cosidering the given code snippet which of the following options are the prototype methods
1. Describe 2.color 3.create 4.name
Ans : Create Describe 
*/
function Flower(){

}
Flower.prototype.create = function(name, color){
    this.name = name;
    this.color = color;
};
Flower.prototype.describe = function(){
    console.log(`This is a ${this.color} ${this.name}`);
};
const flower1 = new Flower();
flower1.create("Rose", "Red");