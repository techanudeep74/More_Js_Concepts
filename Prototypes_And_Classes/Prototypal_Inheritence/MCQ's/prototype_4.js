function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};
Person.prototype.displayFullName = function(){
    return this.firstName + " " + this.lastName;
};
let person1 = new Person("Sania", "Nehwal");
console.log(person1.displayFullName());
