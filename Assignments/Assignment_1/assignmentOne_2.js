let employees = [
    {
        name: "Jim",
        experienceInYear: 0
    },
    {
        name: "Jack",
        experienceInYear: 1
    },
    {
        name: "John",
        experienceInYear: 5
    }
];
function experiencedEmployees(firstEmployee, ...employees){
    console.log(`Name of the employee is ${employees[1].name}`);
}
experiencedEmployees(...employees);
//Name of the employee is John