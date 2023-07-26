function Student(name, age){
    this.name = name;
    this.age = age;
    this.isEligibleToVote = () => (this.age > 18 ? true : false);
}
const student1 = new Student("Pavan", 25);
console.log(student1.isEligibleToVote());