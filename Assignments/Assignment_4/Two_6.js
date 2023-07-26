class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getAge(){
        console.log(`The age of ${this.name} is ${this.age} years`);
    }
}

class Employee extends Person{
    constructor(name, age, experience, position){
        super(name, age);
        this.experience = experience;
        this.position = position;
    }
    getExperience(){
        console.log(`Experience of ${this.name} is ${this.experience} years`);
    }
}

const employee = new Employee("Ram", 24, 3, "Manager");
employee.getAge();
//The age of Ram is 24 years
