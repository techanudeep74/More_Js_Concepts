let purchaseDetails = {
    date: "Sun Oct 27",
    location: "Mumbai",
    total: 300,
    purchase: function(){
        setTimeout(() => {
            console.log(this.total);
        },100);
    }
};
purchaseDetails.purchase();