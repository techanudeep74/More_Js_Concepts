function Tournament(name, winningPrice){
    this.name = name;
    this.winningPrice = winningPrice;
    this.getWinningPrice = () => {
        console.log(this.winningPrice);
    };
}
let tournament1 = new Tournament("IPL", "Rs 20 crores");
tournament1.getWinningPrice();