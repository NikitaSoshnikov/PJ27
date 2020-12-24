
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  r1 = new Roof(500,300,400,20)
 b1 = new Bob(450,450,30)
 b2 = new Bob(500,450,30)
 b3 = new Bob(550,450,30)
 b4 = new Bob(600,450,30)
 b5 = new Bob(650,450,30)
 rope1 = new Rope(b1.body, r1.body,-bobDiameter*2,0)
 rope2 = new Rope(b2.body, r1.body)
 rope3 = new Rope(b3.body, r1.body)
 rope4 = new Rope(b4.body, r1.body)
 rope5 = new Rope(b5.body, r1.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  r1.display() 
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
}



