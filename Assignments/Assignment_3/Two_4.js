function Person(name, age){
    this.name = name;
    this.age = age;
    this.getAge = function(){
        setTimeout(() => {
            console.log(this);
        }, 1000);
    };
}
let person1 = new Person("Pruthvi", 30);
person1.getAge();
// True.