let first = {
    x: 24,
    y:25
};
let second = {
    ...first,
    z: 26,
    v:22
};
let result = second.z + second.y;
console.log(result);