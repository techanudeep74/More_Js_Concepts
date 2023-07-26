function Person(name, age){
    this.name = name;
    this.age = age;
    this.getAge = function(){
        setTimeout(() => {
            console.log(this.age);
        }, 1000);
    };
}
let person1 = new Person("Adharsh", "13");
person1.getAge();
// 13
