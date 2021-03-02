const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Monst1, Monst2, Monst3, Monst4, Monst5;
var ground, ground2;
var box1;
var rope1;
var SuperheroImg;
var GamingBackgroundImg;

function preload(){
SuperheroImg=loadImage("images/Superhero-01.png")
GamingBackgroundImg=loadImage("images/GamingBackground.png")

  
}

function setup() {
  createCanvas(4000,500);
  engine = Engine.create();
  world = engine.world;
  
  Monst1 = new Monster(1500,250,50,100);
  Monst2 = new Monster(1550,250,50,100);
  Monst3 = new Monster(1600,250,50,100);
  Monst4 = new Monster(1650,250,50,100);
  Monst5 = new Monster(1700,250,50,100);
  
  ground = new Ground(10,500,4000,10);
  ground2 = new Ground(1600,400,400,10)

  box1 = new Box(500,250);

  rope1 = new rope(box1.body,{x:500, y:250});

}

function draw() {
  background(GamingBackgroundImg);
  Engine.update(engine);
  
  Monst1.display();
  Monst2.display();
  Monst3.display();
  Monst4.display();
  Monst5.display();
 
  ground.display();
  ground2.display();

  box1.display();
  rope1.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(box1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  rope1.fly();
}

function keyPressed(){
  if (keyCode === 32){
    rope1.attach(box1.body)
  }

}