var fixrect,movingrect;
var fixrect1,fixrect2;



function setup() {
  createCanvas(800,400);
  
  fixrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(500, 100, 50, 50);
movingrect.debug=true;
fixrect.debug=true;
fixrect1=createSprite(500, 200, 50, 50);
fixrect2=createSprite(600, 200, 50, 50);


}


function draw() {
  background("lightblue"); 

 if (isTouching(movingrect,fixrect2)){
  movingrect.shapeColor="red";
  fixrect2.shapeColor="red";
  
 }
 else{
   
  movingrect.shapeColor="green";
  fixrect2.shapeColor="green";
 };
 if (isTouching(movingrect,fixrect)){
  movingrect.shapeColor="blue";
  fixrect.shapeColor="blue";
  
 }
 else{
   
  movingrect.shapeColor="yellow";
  fixrect.shapeColor="yellow";
 };
 if (isTouching(movingrect,fixrect1)){
  movingrect.shapeColor="purple";
  fixrect1.shapeColor="purple";
  
 }
 else{
   
  movingrect.shapeColor="pink";
  fixrect2.shapeColor="pink"
 };
  console.log(movingrect.x-fixrect.x)
  
movingrect.x=mouseX;
movingrect.y=mouseY

  drawSprites();
}




