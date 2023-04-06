// Variables
xCircle = 300; yCircle = 200; diameter = 15;

velocityXCircle = 6; velocityYCircle = 6;

// Functions
function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0);
  circle(xCircle, yCircle, diameter);
  xCircle += velocityXCircle;
  yCircle += velocityYCircle;

  if(xCircle > width || xCircle < 0){
    velocityXCircle *= -1;
  } else if (yCircle > height || yCircle < 0){
    velocityYCircle *= -1;
  }
}
