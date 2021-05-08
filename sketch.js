const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var umbrella;
var drops=[];
var thunder;
var maxDrops=100;
var thunderbolt1;
var thunderbolt2;
var thunderbolt3;
var thunderbolt4;

var x;

var engine,world;

function preload(){
    thunderbolt1=loadImage("1.png");
    thunderbolt2=loadImage("2.png");
    thunderbolt3=loadImage("3.png");
    thunderbolt4=loadImage("4.png");
}

function setup(){
   engine=Engine.create();
   world=engine.world;
  createCanvas(500,500);
  umbrella=new Umbrella(250,350);
  for(i=0;i<maxDrops;i++){
      drops.push(new Drop(random(0,500),random(0,100)));
  }  
}

function draw(){
    background("black");
 Engine.update(engine);


 x=Math.round(random(1,4))
 if(frameCount%80===0){
     thunder=createSprite(random(10,370),random(10,30),10,10);
     switch(x){
         case 1:
             thunder.addImage(thunderbolt1)
             break;
         case 2:
             thunder.addImage(thunderbolt2)
             break;
         case 3:
             thunder.addImage(thunderbolt3)
             break;
         case 4:
             thunder.addImage(thunderbolt4)
             break;
         default:
             break;    
     }
     thunder.scale=random(0.3,0.6);
     thunder.lifetime=20;
 }

 umbrella.display(); 
 for(var i=0;i<maxDrops;i++){
     drops[i].display();
     drops[i].update();
 } 
 drawSprites(); 
}   

