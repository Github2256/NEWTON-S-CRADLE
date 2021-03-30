
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Vector = Matter.Vector;
const Constraint = Matter.Constraint;

var bob1,bob2;
var rope1;



function setup() {
	createCanvas(1200, 800);
	engine = Engine.create();
  world = engine.world;
 
	
roof = new Roof(500,100,100,20);

bob1 =  new Bob(204,500,70,70);
rope1 = new Rope(bob1.body,roof.body,-145*2,0);

bob2 =  new Bob(344,500,70,70);
rope2 = new Rope(bob2.body,roof.body,-75*2,0);

bob3 =  new Bob(484,500,70,70);
rope3 = new Rope(bob3.body,roof.body,-5*2,0);

bob4 =  new Bob(624,500,70,70);
rope4 = new Rope(bob4.body,roof.body,63*2,0);

bob5 = new Bob(764,500,70,70);
rope5 = new Rope(bob5.body,roof.body,132*2,0);


	
	
	
	

	
	
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(225);
  
  roof.display();

  rope1.display();

  rope2.display();

  rope3.display();

  rope4.display();

  rope5.display();

  bob1.display();

  bob2.display();

  bob3.display();

  bob4.display();

  bob5.display();

}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
     Matter.Body.applyForce(bob5.body,bob5.body.position,{x:1000,y:1000});
  }
  
  if (keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1000,y:-1000});
 }
  

 
}

