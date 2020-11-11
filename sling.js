class Sling{
    constructor(bodyA, pointB,offsetX,offsetY){
      this.offsetX=offsetX;
      this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            pointB:{x: this.offsetX, y:this.offsetY}
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;
        strokeWeight(3);
        stroke("white")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }}
    //fly(){
     // this.chain.bodyA=null;}

    }
    
