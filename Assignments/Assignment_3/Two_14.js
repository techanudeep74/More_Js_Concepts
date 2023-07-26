function ClassRoom(teacher, studentCount){
    this.teacher = teacher;
    this.studentCount = studentCount;
}
ClassRoom.prototype.getStudentCount = function(){
    return this.studentCount;
}
const ClassRoom1 = new ClassRoom("Amar", 100);
console.log(ClassRoom1.getStudentCount());
//100
