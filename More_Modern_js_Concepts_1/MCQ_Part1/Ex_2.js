let person = {
    name: "Rahul",
    city: "Hyderabad",
    age: 27
};

let address = {
    pincode: 5000001
};

person.city = "Guntur";

let personDetails = {
    ...person,
    ...address
};

console.log(`${personDetails.name} lives in ${personDetails.city}`);
