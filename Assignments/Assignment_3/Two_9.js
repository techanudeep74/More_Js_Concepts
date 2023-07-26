let train = {
    name: "Chennai Express",
    destination: "Chennai",
    getTrain: function(){
        return this;
    }
};
let train1 = train.getTrain();
console.log(train1 === train);
//true