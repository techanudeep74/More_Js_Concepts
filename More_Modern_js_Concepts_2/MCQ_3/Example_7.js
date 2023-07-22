let x = 7;
let y = 3;
let operation = "Addition";
switch(operation){
    case "Addition":
        console.log(`x + y = ${x + y}`);
    case "Subtraction":
        console.log(`x - y = ${x - y}`);
        break;
    default:
        console.log("Invalid operation");
}