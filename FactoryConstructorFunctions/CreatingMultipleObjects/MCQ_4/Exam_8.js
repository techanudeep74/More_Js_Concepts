function Student(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("hello");
    };
}
console.log(Student.length);