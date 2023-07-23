let Car = new Function(
    "color, brand", `
        this.color = color;
        this.brand = brand;
        this.start = function(){
            console.log("started);
        };`
);
console.log(Function.prototype);