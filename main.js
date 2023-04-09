// Variables Circle
let xCircle = 300; let yCircle = 200; let diameter = 15; let raio = diameter/2;

// Variables Racket Player
let xRacket = 5; let yRacket = 150; let lengthRacket = 10; let heightRacket = 90;

// Variables Hit
let hit = false;

// Variables Racket Enemy
let enmyxRacket = 585; let enmyyRacket = 150; let enmylengthRacket = 10; let enmyheightRacket = 90;

// Variables Velocity
let velocityXCircle = 6; let velocityYCircle = 6;

// Background
function setup() {
  createCanvas(600, 400);
}

// Circle
function drawingTheCircle(){
  circle(xCircle, yCircle, diameter);
}

// Racket Player
function drawingTheRacket(){
  rect(xRacket, yRacket, lengthRacket, heightRacket);
}

// Racket Enemy
function drawingTheRacketEnemy(){
  rect(enmyxRacket, enmyyRacket, enmylengthRacket, enmyheightRacket);
}

// Function to move the circle
function movingTheCircle(){
  xCircle += velocityXCircle;
  yCircle += velocityYCircle;
}

// Function to check the collision
function collisionCheck(){
  if(xCircle + raio > width || xCircle - raio < 0){
    velocityXCircle *= -1;
  } else if (yCircle + raio > height || yCircle - raio < 0){
    velocityYCircle *= -1;
  }
}

// Function to check the collision with the racket
function collisionCheckRacket(){
  hit = collideRectCircle(xRacket, yRacket, lengthRacket, heightRacket, xCircle, yCircle, raio);
  if(hit){
    velocityXCircle *= -1;
  }
}

// Function to check the collision with the racket enemy
function collisionCheckRacketEnemy(){
    hit = collideRectCircle(enmyxRacket, enmyyRacket, enmylengthRacket, enmyheightRacket, xCircle, yCircle, raio);
    if(hit){
        velocityXCircle *= -1;
    }
}

// Function to move the racket
function moveRacketplayer1(){
  if(keyIsDown(UP_ARROW)){
    yRacket -= 10;
  } else if(keyIsDown(DOWN_ARROW)){
    yRacket += 10;
  }
}

// Function to move the racket enemy
function moveRacketEnemy(){
  if(keyIsDown(87)){
    enmyyRacket -= 10;
  } else if(keyIsDown(83)){
    enmyyRacket += 10;
  }
}


// Main
function draw() {
  background(0);
  drawingTheCircle();
  drawingTheRacket();
  drawingTheRacketEnemy();
  movingTheCircle();
  moveRacketplayer1();
  moveRacketEnemy();
  collisionCheck();
  collisionCheckRacket();
  collisionCheckRacketEnemy();
}
