const studentData = [
    {
        name: "Raju",
        age: 17
    },
    {
        name: "Ravi",
        age: 19
    }
];
const updateStudentData = (student) => {
    student.name = "Ram";
};
updateStudentData(studentData[0]);
console.log(studentData[0].name);
console.log(studentData[1].name);