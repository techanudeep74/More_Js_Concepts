// Concatenation of two Arrays
let person = {name: "Anudeep", age: 27};
let address = {city: "Hyderabad", pincode: 5223301};
let personDetails = {...person, ...address};
console.log(personDetails);