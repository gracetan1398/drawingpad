var myRed = 10;
var myGreen = 0;
var myBlue = 225;

function setup() {
  createCanvas(640, 480);
  background(255, 0, 102);
}

function draw() {
  noStroke();
  fill(myRed, myGreen, myBlue);
  ellipse(mouseX, mouseY, 25, 25);
  myRed = myRed + 0.5;
  myBlue = myBlue - 1;
if (myRed >=255){
  myRed = 0;
}

if (myBlue >=255){
  myBlue = 255;
}
}

function mousePressed(){
background(255, 0, 102);
}

