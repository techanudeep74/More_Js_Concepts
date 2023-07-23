function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.displayFullName = function(){
    return this.firstName + " " + this.lastName;
}

let person1 = new Person("Anudeep", "Pusapati");
let person2 = new Person("Himasritha", "Pusapati");

console.log(person1);
console.log(person2);

console.log(Person.prototype);
console.log(person2.displayFullName());
console.log(Object.getPrototypeOf(person1) === Object.getPrototypeOf(person2));
console.log(Object.getOwnPropertyNames(person1));