let cordinates1 = {x: 75, y: 25};
let cordinates2 = {x: 90, y: 60};
let combined = {
    z: 22,
    ...cordinates2,
    ...cordinates1
};
let result = combined.x + combined.y;
console.log(result);
//100
