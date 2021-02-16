var movingRect,fixedRect
function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(200,200,10,100)
 movingRect=createSprite(255,200,100,10)
 fixedRect.shapeColor="pink"
 movingRect.shapeColor="pink"
 fixedRect.debug=true
 movingRect.debug=true
  
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    &&movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    &&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2)

    {
      movingRect.shapeColor="black";
      fixedRect.shapeColor="black";
    }
    else{
      movingRect.shapeColor="pink";
      fixedRect.shapeColor="pink";
    }
  drawSprites();

}