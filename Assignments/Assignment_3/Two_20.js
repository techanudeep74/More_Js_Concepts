let trouser = {
    color: "Yellow",
    size: "30",
    price: 1299,
    getPrice: function(){
        console.log(this.price);
    }
}
let newTrouser = trouser;
newTrouser.price = 2299;
trouser.getPrice();
newTrouser.getPrice();
//2299 2299