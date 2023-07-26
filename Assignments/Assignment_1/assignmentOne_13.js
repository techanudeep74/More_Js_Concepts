let person = {
    firstName: "Rahul",
    lastName: "Attuluri",
    age: 27
};
let job = {
    jobTitle: "JavaScript Developer",
    location: "Guntur"
};
let employee = {
    location: "Mumbai",
    ...person,
    ...job
};
console.log(employee.location);
// Guntur
