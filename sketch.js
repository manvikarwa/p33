const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;

var bgimg;
var sm, smimg;
var sf1,sf2,sf3;
var engine,world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create(); 
  world = engine.world;
 sm =  createSprite(400, 200, 50, 50);
 sm.addImage(smimg)
 sm.scale = 0.2;
 sf1 = new Snow(50,50,20,20);
  sf2 = new Snow(100,50,30,20);
  sf3 = new Snow(350,50,10,10);
 

}

function preload(){
  bgimg = loadImage("images/snowfall.webp");
  smimg = loadImage("images/snowman.jpg");
  
}

function draw() {
  background(bgimg); 
  Engine.update(engine); 
  sf1.display();
  sf2.display();
  sf3.display();
  drawSprites();


  if(keyDown(RIGHT_ARROW)){
      sm.x +=5;
  }

  if(keyDown(LEFT_ARROW)){
    sm.x -=5;
}
}