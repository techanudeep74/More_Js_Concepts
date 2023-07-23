function Match(team, margin){
    this.team = team;
    this.margin = margin;
};
Match.prototype.result = function(){
    return `${this.team} won by ${this.margin}`;
};
let match1 = new Match("India", "3 runs");
console.log(match1.result());
