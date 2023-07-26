let person = {
    name: "Lal Bahadur Shastri",
    born: "2 October 1904",
    nationality: "Indian",
    about: "2nd Prime Minister of India"
};
person.awards = "Bharat Ratna (1966)";
let {name, awards, about} = {...person};
console.log(awards);
//Bharat Ratna (1966)
