class Pendulum{
    constructor(x,y,r){
     var options={
         density:1,
         friction:0.3,
         restitution:1
     }
     
     this.body=Bodies.circle(x,y,r,options)
     //this.width=w;
     this.radius=r;
     World.add(world,this.body);
    }
   
    display(){
     var pos=this.body.position;
     var angle=this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     ellipseMode(RADIUS);
     fill("black");
     ellipse(0,0,this.radius,this.radius);
     pop();
    }

   
   }