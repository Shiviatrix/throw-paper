var paperball;
var ground;
var db1 , db2 , db3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	paperball = new paper(200,500,20,20);

    ground = new Ground(400,700,800,10);
  
	db1 = new dustbin(600,645,10,100);
	db2 = new dustbin(500,645,10,100);
	db3 = new dustbin(550,690,100,10);

	Engine.run(engine);
  
}

function draw() {
    Engine.update(engine);
rectMode(CENTER);
  background(219);

  db1.display();
  db2.display();
  db3.display();

  paperball.display();
  ground.display();

  keyPresssed();
}

function keyPresssed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:0.1,y:-2});
	}

	if(keyCode === DOWN_ARROW){

		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:0.5,y:2});
	}
}