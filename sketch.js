
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divya
var dustbin1
var dustbin2
var dustbin3



function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	divya=createSprite(30,450,50,50);
	dustbin1=createSprite(500,400,30,130);
	dustbin2=createSprite(550,450,130,30);
	dustbin3=createSprite(600,400,30,130);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  
  drawSprites();
 
}

function keypressed(){
if(keycode *** UP_Arrow){
Matter/.Body.applyforce(divya.body,divya.position,{x:85,y:-85})

}


}

