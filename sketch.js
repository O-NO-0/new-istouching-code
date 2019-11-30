var mrect,rect1;
var ob1,ob2,ob3;

function setup() {
  createCanvas(800,400);
rect1 = createSprite(300, 300, 50, 50);
  mrect = createSprite(100, 100, 50, 50);
 ob1 = createSprite(150, 170, 10, 10);
 ob2 = createSprite(170, 120, 25, 30);
 ob3 = createSprite(120, 150, 25, 25);
 mrect.shapeColor="black";
rect1.shapeColor = "black"; 
 ob1.shapeColor="black";
  ob2.shapeColor="black";
  ob3.shapeColor="black";
}

function draw() {
  background(255,255,255); 

  mrect.y = World.mouseY;

  mrect.x = World.mouseX;
 
  if(isTouching(mrect,ob1)){
    mrect.shapeColor="red";
  ob1.shapeColor = "blue";    
}
else{
  mrect.shapeColor="black";
ob1.shapeColor = "black"; 
}

  
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    &&object2.x-object1.x<object2.width/2+object1.width/2
    &&object2.y-object1.y<object2.height/2+object1.height/2
    &&object1.y-object2.y<object2.height/2+object1.height/2){
     return true;
         
  }
  else{
    return false;
  }
    }
