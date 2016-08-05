var myRed = 255;
var myGreen = 0;
var myBlue = 200;

function setup() {
  createCanvas(640, 480);
  background(255, 255, 255);
}

function draw() {
  noStroke();
  fill(myRed, myGreen, myBlue);
  ellipse(mouseX, mouseY, 25, 25);
  myRed = myRed + 0.5;
  myBlue = myBlue - 1;
  
if (myRed >=255){
  myRed = 100;
}

if (myBlue >=255){
  myBlue = 100;
}

if (mouseIsPressed == true) {
  noStroke();
  fill (255, 255, 255);
  ellipse(mouseX, mouseY, 25, 25);
}
}


