function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.greet = function(){
        return `Hello ${this.firstName}`;
    };
}
let person1 = new Person("Rahul", "Attuluri");
console.log(person1.greet());