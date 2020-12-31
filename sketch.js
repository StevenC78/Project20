var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=(80,80,80);

  Deformation=0.5*weight*speed/22500;
}

function draw() {
  background(255,255,255);  

  car.velocityX=speed;
  if(car.isTouching(wall)){
    car.velocityX=0;
  }

  if(Deformation<100){
    car.shapeColor=(0,255,0);
  }
    if(Deformation>100 && Deformation<180){
      car.shapeColor=(230,230,0);
    }

    if(Deformation>180){
      car.shapeColor=(255,0,0);
    }


  drawSprites();
}