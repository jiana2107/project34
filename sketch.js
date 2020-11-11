
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mconstraint = Matter.MouseConstraint;
const Mouse=Matter.Mouse;

var p1,p2,p3,p4,p5;
var s1,s2,s3,s4,s5;
var mc;

var world,engine;

function setup() {

 var canvas= createCanvas(800, 700); 
  
  engine = Engine.create();
  world = engine.world;
  
 var canvasmouse=Mouse.create(canvas.elt)
 canvasmouse.pixelRatio=pixelDensity()

  var options={
   mouse:canvasmouse}

  mc=Mconstraint.create(engine,options)
  World.add(world,mc);

  p1=new Pendulum(200,600,50);
  p2=new Pendulum(300,600,50);
  p3=new Pendulum(400,600,50);
  p4=new Pendulum(500,600,50);
  p5=new Pendulum(600,600,50);
  
  s1=new Sling(p1.body,200,190,100)
  s2=new Sling(p2.body,200,290,100)
  s3=new Sling(p3.body,200,390,100)
  s4=new Sling(p4.body,200,490,100)
  s5=new Sling(p5.body,200,590,100)

	//Create the Bodies Here.
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  s1.display()
  s2.display()
  s3.display()
  s4.display()
  s5.display()

  p1.display()
  p2.display()
  p3.display()
  p4.display()
  p5.display()

  drawSprites();
 
}

//function mouseDragged(){
 // Matter.Body.setPosition(p1.body,{x:mouseX,y:mouseY})}




