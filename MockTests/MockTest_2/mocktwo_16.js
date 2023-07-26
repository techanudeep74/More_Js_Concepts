let tablet1 = new Tablet("6GB", "128GB");
tablet1.describe();

function Tablet(ram, rom){
    this.ram = ram;
    this.rom = rom;
    this.describe = () => {
        console.log(`this tablet has ${this.ram} Ram and ${this.rom} of Rom`);
    };
}
//this tablet has 6GB Ram and 128GB of Rom