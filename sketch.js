var backgroundImage;
var boy,snow;

function preload(){

backgroundImage = loadImage("snow3.jpg");
//boy = loadImage("boy-in-snowsuit-clipart-1.jpg");

}

function setup() {
  createCanvas(800,400);

  boy = createSprite(400, 250, 50, 200);
  boy.shapeColor="red";

  snow = new Snow(200,0,10,3);
  snow.scale=0.01;
}

function draw() {

  background(backgroundImage);  

  snow.display();
  drawSprites();

}
function keyPressed() {
	//write code here
	if(keyCode===RIGHT_ARROW){
      boy.x+=20;
	}

	if(keyCode===LEFT_ARROW){
      boy.x-=20;
	}

  if(keyCode===DOWN_ARROW){
    snow.velocityY=2;
	}

}