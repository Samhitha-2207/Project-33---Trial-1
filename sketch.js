const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies;
 
var score = 0;
var turn = 0;

var particles = [];
var divisions = [];
var plinkos = [];

var engine, world;

var gameState = 0;

//var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  

  ground = new Ground(width/2,height,width,20);

   for (var k = 10; k <=width; k=k+40) {
     divisions.push(new Divisions(k,325,10,300));
   }

    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,375));
    }

}
 
function draw() {
  background("black");
  Engine.update(engine);
 
  
  textSize(20);
  text("Score : "+score,20,30);

  text("500",100,300);

   ground.display();

   if(frameCount%60===0){
     particles.push(new Particle(mouseX,10,10));
     score++;
   }
   
   for (var i = 0; i < particles.height; i++) {
     particles[i].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
   for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
   }

   if(particles.x>10 && parrticles.x<130){
     score = score + 500;
   }

   if(particles.x>130 && particles.x<220){
     score = score + 100;
   }

   if(particles.x>220 && particles.x<310){
    score = score + 200;
  }

   if(turn >= 5){
     gameState = 1;
   }

}

function mousePressed(){
  if(gameState!==1){
    score++;
    particle = new Particle(mouseX,10,10)
  }
}