
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var Paper;
var Ground;
var Box1, Box2, Box3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	Paper = new paper(50,400);
	Ground = new ground(800,600,1700,20);
	Box1 = new box(1100,600,160,10);
	Box2 = new box(1180,548,10,200);
	Box3 = new box(1030,548,10,120)
}


function draw() {
	
	Engine.update(engine);
  rectMode(CENTER);
  background(200);
  keypressed();
  
  drawSprites();
  Paper.display();
  Ground.display();
  Box1.display();
  Box2.display();
  Box3.display();
  
}
function keypressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:3,y:-13.5})
	}
	
}
	






