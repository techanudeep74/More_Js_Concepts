let bulb = {
    voltage: "120 volts",
    cost: "500 rupees"
};
let bulbDetails = {
    ...bulb,
    warranty: "1 year"
};
console.log(bulbDetails);