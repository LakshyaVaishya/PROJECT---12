var road,roadimage;
var runner,runnerimage;

function preload(){
  //pre-load images
roadimage=loadImage("path.png");
runnerimage=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  leftboundary=createSprite(30,200,20,380);
  rightboundary=createSprite(380,200,20,380);
  path=createSprite(200,200);
  path.addImage(roadimage);
  path.velocityY=4;
  path.scale=1.2;
  runner=createSprite(200,300,30,30);
  runner.addAnimation("movingrunner",runnerimage);
  runner.scale=0.08;
 leftboundary.visible=false;
 rightboundary.visible=false;
}

function draw() {
  background(200,200);
  background("black")
  

if(path.y>355){
path.y=height/2;
}

runner.x=mouseX;
runner.collide(leftboundary);
runner.collide(rightboundary);

 drawSprites()
}
