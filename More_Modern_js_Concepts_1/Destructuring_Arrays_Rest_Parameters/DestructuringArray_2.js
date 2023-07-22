let {firstName,age, ...rest} = {
    firstName: "Anudeep",
    lastName: "Pusapati",
    age: 25,
    opportunity: "Software Developer"
};
console.log(firstName);
console.log(age);
console.log(rest);