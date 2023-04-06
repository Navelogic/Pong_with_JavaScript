// Variables
let xCircle = 300; let yCircle = 200; let diameter = 15;
let raio = diameter/2;

let velocityXCircle = 6; let velocityYCircle = 6;

// Functions
function setup() {
  createCanvas(600, 400);
}

function drawingTheCircle(){
  circle(xCircle, yCircle, diameter);
}

function movingTheCircle(){
  xCircle += velocityXCircle;
  yCircle += velocityYCircle;
}

function collisionCheck(){
  if(xCircle + raio > width || xCircle - raio < 0){
    velocityXCircle *= -1;
  } else if (yCircle + raio > height || yCircle - raio < 0){
    velocityYCircle *= -1;
  }
}




// Main
function draw() {
  background(0);
  drawingTheCircle();
  movingTheCircle();
  collisionCheck();
}
