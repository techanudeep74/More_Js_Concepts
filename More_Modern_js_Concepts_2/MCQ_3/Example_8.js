let fruit = "Orange";
let text = "";
switch(fruit){
    case "Banana":
        text = "Bananas will improve Digestive Health";
    case "Orange":
        text = "Oranges are excellent source of vitamin c.";
    case "Apple":
        text = "Apples will have lower colestrol";
        break;
    default:
        text = "I have never heard that fruit.";
}
console.log(text);