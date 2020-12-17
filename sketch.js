
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper(100,100,2);


   
	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  background("pink");
  

 paper.display();
 dustbin.display();
}



