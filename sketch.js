 var bow , arrow,  scene;
 var backgroundImage;
 var bowImage, arrowImage, arrowGroup;

 var redB,  red_balloonImage;
 var greenB, green_balloonImage;
 var blueB, blue_balloonImage;
 var pinkB, pink_balloonImage;

 var score;

 function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
 }

 function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0    

  redB = new Group();
  greenB = new Group();
  blueB = new Group();
  pinkB = new Group();
  arrowGroup = new Group();

  score = 0;

 }

 function draw() {

  

 background(0);
  // moving ground
  scene.velocityX = -3 

  if (scene.x < 0){
  scene.x = scene.width/2;
 }

 text("Score: "+ score, 300,50);
  
  //moving bow
  bow.y = World.mouseY
  
  // release arrow when space key is pressed
  if (keyDown("space")) {
   createArrow();
    
 }
   
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else if (select_balloon == 4) {
      pinkBalloon();
    }
  }  

  if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    arrow.destroyEach();
    score = score + 1;
  }

  if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 2;
  }

  if (arrowGroup.isTouching(blueB)) {
    blue.destroyEach();
    arrowGroup.destroyEach();
    score = score + 3;
  }

  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 4;
  }
    
  drawSprites();
  
 }


 // Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.1;
 }

 function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  
 }

 function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
 }

 function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
 }

 function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.5;
  
 }
