// Variables
let xCircle = 300; let yCircle = 200; let diameter = 15;
let raio = diameter/2;

let xRacket = 5; let yRacket = 150; let lengthRacket = 10; let heightRacket = 90;

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

// Function to move the racket
function moveRacketplayer1(){
  if(keyIsDown(UP_ARROW)){
    yRacket -= 10;
  } else if(keyIsDown(DOWN_ARROW)){
    yRacket += 10;
  }
}





// Main
function draw() {
  background(0);
  drawingTheCircle();
  drawingTheRacket();
  movingTheCircle();
  moveRacketplayer1();
  collisionCheck();
}
