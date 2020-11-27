
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var box1, box2, box3;
var ground;

function preload()
{

	}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10); 
	groundSprite.shapeColor=color(255)

	box1=createSprite(360,650,200,20); 
	box1.shapeColor=("red"); 
	
	box2=createSprite(250,620,20,100); 
	box2.shapeColor=("red"); 
	
	box3=createSprite(450,620,20,100); 
	box3.shapeColor=("red"); 
	
	ground=new DustBin(width/2, height-35, width,10)

	box1=new DustBin(360,650,200,20);
	box2=new DustBin(250,620,20,100);
	box3=new DustBin(450,620,20,100);

	paper=new Paper(50,100,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display()

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === DOWN_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});

	}

}

