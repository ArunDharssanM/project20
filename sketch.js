var sleep,gym,bath,eat,brush,moveAs,Astronut,edges;
var ground,groundImage;


function preload(){
sleep=loadAnimation("sleep.png");
groundImage = loadImage("iss.png");
gym=loadAnimation("gym1.png","gym2.png");
bath=loadAnimation("bath1.png","bath2.png")
eat=loadAnimation("eat1.png","eat2.png");
brush=loadAnimation("brush.png");
moveAs=loadAnimation("move.png","move1.png","move.png");

}


function setup() {
  createCanvas(800,400);
 
  ground = createSprite(320,190);
  ground.addImage("ground",groundImage);
  ground.scale=0.13;

  Astronut = createSprite(320,200,20,50); 
  Astronut.addAnimation("sleeping", sleep);
  Astronut.scale=0.1;

}

function draw() {
  background(255,255,255); 
 edges=createEdgeSprites();
  
  if(keyDown("UP_ARROW")){
    Astronut.addAnimation("brushing",brush);
    Astronut.changeAnimation("brushing");
    Astronut.y=250;
    Astronut.x=320;
    Astronut.velocityX=0;
    Astronut.velocityY=0;
  }
  if(keyDown("DOWN_ARROW")){
    Astronut.addAnimation("gyming",gym);
    Astronut.changeAnimation("gyming");
    Astronut.y=250;
    Astronut.x=320;
    Astronut.velocityX=0;
    Astronut.velocityY=0;
  }
  if(keyDown("LEFT_ARROW")){
    Astronut.addAnimation("eating",eat);
    Astronut.changeAnimation("eating");
    Astronut.x=180;
    Astronut.y=250;
    Astronut.velocityX=0.50;
    Astronut.velocityY=-0.35;
  }
 
  if(keyDown("RIGHT_ARROW")){
    Astronut.addAnimation("bathing",bath);
    Astronut.changeAnimation("bathing");
    Astronut.y=250;
    Astronut.x=320;
    Astronut.velocityX=0;
    Astronut.velocityY=0;
  }
  if(keyDown("m")){
    Astronut.addAnimation("moving",moveAs);
    Astronut.changeAnimation("moving");
    Astronut.y=250;
    Astronut.x=320;
    Astronut.velocityX=-0.75;
    Astronut.velocityY=0.75;
    
  }
  Astronut.bounceOff(edges);
  //Astronut.debug=true;
  Astronut.setCollider("rectangle",0,0,1700,2300);
  drawSprites();
}


