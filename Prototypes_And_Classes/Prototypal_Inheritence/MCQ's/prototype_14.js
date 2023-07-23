function Latesttechnologies(technology1, technology2){
    this.technology1 = technology1;
    this.technology2 = technology2;
};
Latesttechnologies.prototype.getTechnologies = function(){
    return `${this.technology1}, ${this.technology2} are the latest technologies`;
}
let latesttechnologies = new Latesttechnologies("AI", "ML");
console.log(Object.getOwnPropertyNames(latesttechnologies));