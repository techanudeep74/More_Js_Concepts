function Student(rollNo, age){
    this.rollNo = rollNo;
    this.age = age;
    this.greet = function(){
        console.log("Hello");
    };
}
console.log(Student.name);