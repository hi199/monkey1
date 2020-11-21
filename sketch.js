
var monkey , monkey_running
var banana ,bananaImg, obstacle, obstacleImg
var bannaGroup, obstacleGroup
var score=0
var gamestate=1
var PLAY=1
var END=0
function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImg = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(900,400)
  monkey = createSprite(180,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;
  score=0;
  ground = createSprite(500,350,1800,10);
  ground.x = 10
  console.log(ground.x)
  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
}


function draw() {
background(990)
  if (gamestate==1){
    
    monkey.collide(ground);
    
    if (ground.x < 0){
        ground.x = ground.width/2;
    }
    
  spawnobstacles()
  spawnbanana()
  
    if (monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach()
    score=score+1
  }
  
  stroke("green");
  textSize(20);
  fill("green")
  text("Score: "+ score ,500,50)
  stroke("black");
  textSize(20);
  fill("black")
    
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime"+survivalTime ,100,50)
 
    if(keyDown("space")&& monkey.y >= 250) {
        monkey.velocityY = -14;
 }
    
  monkey.velocityY = monkey.velocityY + 0.6
    
if (monkey.isTouching(obstaclesGroup)){
    gamestate=END
     
}
    drawSprites(); 
  }  
  if(gamestate === 0)
    {
      textSize(32);
      text("GameOver" , 300,200);
    }


}
function spawnobstacles(){
 

if (frameCount % 300 === 0){
   var obstacle = createSprite(800,285,10,20); 
    obstacle.scale = 0.3;
    obstacle.velocityX=-7
    obstacle.addImage(obstacleImg); 
    obstacle.lifetime = -1
    obstaclesGroup.add(obstacle);
}
}
function spawnbanana(){
 if (frameCount % 200 == 0) {
    banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);    
    banana.scale = 0.2;
    banana.velocityX = -3;
   banana.lifetime = -1;
   bananaGroup.add(banana);
 }
}  
var survivalTime=0;