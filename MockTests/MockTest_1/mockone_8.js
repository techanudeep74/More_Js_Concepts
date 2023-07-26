const stationery = ["Pencil", "Eraser", "Stapler"];
const store = stationery;
const bag = [...stationery];

stationery[0] = "Pen";
console.log(store[0]);
console.log(bag[0]);

// Output: Pen Pencil