function createFan(){
    return{
        brand: "Bajaj",
        wings: 3,
        switchOn: function(){
            return "ON";
        }
    };
}
let fan1 = createFan();
console.log(fan1.switchOn());