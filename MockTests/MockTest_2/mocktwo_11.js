function Sport(name, players){
    this.name = name;
    this.players = players;
}
Sport.prototype.play = function(){
    return "Game started";
};
const sport1 = new Sport("Hockey", 11);
console.log(Object.getOwnPropertyNames(sport1));
// [ 'name', 'players' ]