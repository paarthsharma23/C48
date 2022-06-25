var bground , ground , bgsprite ;
var character , characterimg , characterimg2 ,  character_running;
/*const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body; 
const Bodies = Matter.Bodies;*/
var engine,world;
var wall,wall_image,wall_Breaking;
var skeletonimg , skeleton ; 

function preload(){
//character_running = loadAnimation("character_running_2.png","character_running_3.png","character_running_4.png");
characterimg = loadAnimation("hunter1.png");
characterimg2 = loadAnimation("hunter3.png");
bground = loadImage("background 1.jpg");
wall_image = loadImage("wall.png");
wall_Breaking = loadImage("broken_wall.png");
skeletonimg = loadImage("skeleton imagee.png");
}

function setup (){
 var canvas = createCanvas(1200,700);
 bgsprite = createSprite(600,350,1200,700);
 ground = createSprite(600,670,1200*4,30);
 character = createSprite(200,620,100,50);
 character.addAnimation("run",characterimg);
 character.addAnimation("attack",characterimg2);
 
 character.debug=true;
 character.setCollider("circle",0,-50,50);
 character.scale=2;
 character.rotation=20 ; 
 skeleton = createSprite(1250,490,150,400);
 skeleton.setCollider("rectangle",-40,0,skeleton.width,skeleton.height);
 skeleton.debug=true;
 
}
 function draw(){
     background("black");
    //background(bground);
    //character.addAnimation("running",character_running);
    bgsprite.addImage("backgroundimg",bground);
    bgsprite.scale=3;
    bgsprite.velocityX=-2;
    if(bgsprite.x<450){
    bgsprite.x=600;
    }
    
    if(keyDown(RIGHT_ARROW)){
    character.x=character.x+2;
    }
    if(keyDown(RIGHT_ARROW)&& keyDown("ctrl")){
        character.x=character.x+5;
        }
    if(keyDown(UP_ARROW)&&character.y>=550){
    character.velocityY=-9;
    }
    if(keyDown("A")){
    character.changeAnimation("attack",characterimg2);
    
    }
    if(keyWentUp("A")){
    character.changeAnimation("run",characterimg);
    }
    character.velocityY=character.velocityY+0.8;
    if(character.x>1200){
    character.x=-10;
    }
    //if(keyDown ("z")){
    //character.addImage(characterimg2);
    //}
    //console.log(character.y);
    //skeleton.position(1250,490);

    
    skeleton.addImage(skeletonimg);
    skeleton.velocityX=-2;
    character.collide(skeleton);
    character.collide(ground);
drawSprites();
}
 function player(){
 
 }