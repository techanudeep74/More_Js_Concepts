let bulbStatus = "0";
let text = "";
switch(bulbStatus){
    case 0:
        text = "Off";
        break;
    case 1:
        text = "On";
        break;
    default:
        text = "No value found";
}
console.log(text);
