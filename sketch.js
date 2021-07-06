

var car, wall;
var speed,width;

function setup() {
  createCanvas(1600,400);
 car =createSprite(40, 250, 25, 25);
 wall =createSprite(1540, 250, 50, 150);

 speed=random(50,90);
 width=random(400,1500);

car.velocityX = speed;

}

function draw() {
  background("aqua");

   if (wall.x.x<(car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation=0.5*weight*speed*speed/2250;
    if(deformation>180){
      car.shapeColor = (0,250,0);
    }
      if(deformation<180 && deformation>100) {
     car.shapeColor = (230,230,0);
      }
      if(deformation<100){
      car.shapeColor = (0,250,0);
      }

   }
  

  drawSprites();
}