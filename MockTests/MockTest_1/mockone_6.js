const camera = {
    brand: "Nikon",
    megapixel: 48,
    aperture: 1.8,
    focallength: 200,
    cost: 40000
};
const {aperture, focallength, ...rest}  = camera;
console.log(rest.aperture);

// Output: Undefined
