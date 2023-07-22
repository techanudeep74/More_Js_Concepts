function getAnimal(a,b,c = "Elephant"){
    return c;
}

let animals = ["Tigers", "Lions"];
console.log(getAnimal(...animals))

