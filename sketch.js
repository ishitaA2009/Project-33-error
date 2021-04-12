var backgroundImage;
var boy,boyImg,snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9,snow10;
var snow11,snow12,snow13,snow14,snow15,snow16,snow17,snow18,snow19,snow20 ;

function preload(){

backgroundImage = loadImage("snow3.jpg");
boyImg = loadImage("snow5.webp");

}

function setup() {
  createCanvas(800,400);

  boy = createSprite(400, 250, 50, 200);
  boy.addImage(boyImg);

  snow1 = new Snow(200,0,10,3);
  snow2 = new Snow(250,50,8,8);
  snow3 = new Snow(300,100,10,3);
  snow4 = new Snow(350,150,8,8);
  snow5 = new Snow(400,0,10,3);
  snow6 = new Snow(450,50,8,8);
  snow7 = new Snow(500,300,10,3);
  snow8 = new Snow(550,220,8,8);
  snow9 = new Snow(600,180,10,3);
  snow10 = new Snow(650,50,8,8);
  snow11 = new Snow(700,0,10,3);
  snow12 = new Snow(750,60,8,8);
  snow13 = new Snow(800,270,10,3);
  snow14 = new Snow(150,350,8,8);
  snow15 = new Snow(100,200,10,3);
  snow16 = new Snow(50,400,8,8);
  snow17 = new Snow(10,280,10,3);
  snow18 = new Snow(440,350,8,8);
  snow19 = new Snow(370,190,10,3);
  snow20 = new Snow(230,30,8,8);
  
}

function draw() {

  background(backgroundImage);  

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();
  snow13.display();
  snow14.display();
  snow15.display();
  snow16.display();
  snow17.display();
  snow18.display();
  snow19.display();
  snow20.display();
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