const Engine = new Function("type, cylinders",
`this.type = type;
this.cylinder = cylinder;
this.start = function(){
    console.log(this.type);
};
`
);

const engine1 = new Engine("2-Stroke", 4);
engine1.start();
// Reference Error
