let a = 20;
let b = 10;
let operation = "add";
switch(operation){
    case "add":
        console.log(`a + b => ${a+b}`);
        break;
    case "sub":
        console.log(`a - b => ${a - b}`);
        break;
    case "mul":
        console.log(`a * b => ${a * b}`);
        break;
    case "div":
        console.log(`a / b => ${a / b}`);
        break;
    default:
        console.log("Invalid Opreator");
}