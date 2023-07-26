class Quadrilaterial{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}
Quadrilaterial.prototype.getHeightAndWidth = function(){
    return this;
};
const quadrilaterial = new Quadrilaterial(4,5);
const quadrilaterialDetails = quadrilaterial.getHeightAndWidth();
console.log(quadrilaterial === quadrilaterialDetails);

// true