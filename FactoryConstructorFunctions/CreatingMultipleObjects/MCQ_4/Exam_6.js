function Team(name, wins){
    this.name = name;
    this.getPoints = function(){
        return wins * 2;
    };
}
let team1= new Team("India", 5);
console.log(team1.getPoints());