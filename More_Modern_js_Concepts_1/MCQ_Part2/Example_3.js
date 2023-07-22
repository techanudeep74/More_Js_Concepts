let points = [97,98,99];
let employee = {
    name: "Muneera",
    age: 18,
    bonusPoints: [96, ...points, 100]
};
let { bonusPoints } = employee;
console.log(bonusPoints);