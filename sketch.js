var pinko;
var divisions;
var score=0;





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  pinko.display();
  divisions.display();
  drawSprites();
}
if(pinko.isTouching(divisions)){
  score=score+1;
}
