var bgimg,bg
var bggimg,bg
var Im,jpg
function preload(){

  bgimg=loadImage('images/bg.jpg')
  bggimg=loadImage('images/goat.png')
  lmimg=loadImage('images/m.png')

}
function setup() {
  createCanvas(1700,800);

 moutain=createSprite(850,100,1800,50)
 //moutain.addImage("moutain",lmimg)
 moutain.scale=0.3
// Ground=createSprite(850,850,1700,20)
goat=createSprite(650,300,50,50)
 goat.addImage("goat",bggimg)
 goat.scale=0.56
 
ground=createSprite(850,750,1700,20);

}

function draw() {
  background(bgimg);  

if (keyDown ('space')){
goat.velocityY=(-10)

}
goat.velocityY=goat.velocityY+0.5

goat.collide(ground)
spawnMountains()
  drawSprites();

}



function spawnMountains() {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
     mountain = createSprite(1700,900,40,10);
    mountain.y = Math.round(random(300,700));
    mountain.addImage(lmimg);
    mountain.scale = 0.5;
    mountain.velocityX = -4;
    
     //assign lifetime to the variable
    mountain.lifetime = 425;
    
    //adjust the depth
    mountain.depth = goat.depth;
    goat.depth = goat.depth + 1;
    
    
    }
}

