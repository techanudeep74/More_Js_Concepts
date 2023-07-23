function createMobile(brand, ram){
    return {
        brand,
        ram
    };
}
let mobile1 = createMobile("Samsung", "8 Gb");
console.log(mobile1.brand);
console.log(mobile1.ram);