const ceiling1 = {
    color: "blue", 
    texture: "smooth"
};
const ceiling2 = {
    rating: 10,
    texture: "rough"
};
const ceiling3 = {
    ...ceiling1, ...ceiling2
};
const ceiling4 = {
    ...ceiling3, 
    rating: 12
};

console.log(ceiling4.color);
console.log(ceiling4.texture);
console.log(ceiling4.rating);

// Output : blue rough 12