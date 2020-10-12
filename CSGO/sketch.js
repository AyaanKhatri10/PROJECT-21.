var wall, thickness
var bullet,speed,weight
var Damage
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  thickness = random(22,83);
  wall = createSprite(1200, 200,thickness,height);
  weight = random(30,52);
 
}

function draw() {
  background(0, 0, 0); 
  
  Damage = 0.5 * weight * speed * speed/thickness*thickness*thickness;
 



if(Damage<3.69 && thickness>40){

wall . shapeColor= "green" ;
}

if(Damage>12.42 && thickness<40){
wall . shapeColor= "red";
}

  drawSprites();
}
function hasCollided(lbullet, lwall)
{
bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;

if (bulletRightEdge>=wallLeftEdge)
{
return true
}
return false
}