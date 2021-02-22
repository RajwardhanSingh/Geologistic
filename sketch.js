
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammerObj,stoneObj,groundObj,paperObj
function preload()
{
	
}

function setup() {
	createCanvas(1200,800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammerObj=new hammer(240,100);
stoneObj=new stone(300,150)
groundObj = new Ground(width/2,height-20,width,20);
paperObj=new paper(240,100,70)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  hammerObj.display();
 stoneObj.display();
 groundObj.display();
 paperObj.display();
}



