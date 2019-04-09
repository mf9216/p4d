// Marie Fabozzi
// IGME-609 
// Variables P.E.
// 1/28/2019

//initialize count variable
var count=0;

//initialize colorSaturation variable
var colorSaturation=0;

var leftRectX;



// declare global for setup and draw
var canvasSize;

function setup() {
//Create size of canvas
  canvasSize = 500;
  
  createCanvas(canvasSize, canvasSize);
  ellipseMode(CENTER);
  
  var leftRectX=0;
}

function draw() {
  background(220);
  
  //declare the variables
  var x=width/2;
  var y=height/2;
  
  //control the size of ellipse
  var size=200+count;
  
  //circle
  fill(colorSaturation,0,0);
  noStroke();
  ellipse(x,y,size,size);
  
  //increment the count variable
  count=count+1;
  
  //increment the black to red color saturation by 1
  colorSaturation=colorSaturation+1;
  
  //draw location of left rectangle
  fill(38, 165, 40);
  rect(leftRectX,0,50,50);
  
  //why is this var NOT moving the rect?
  var leftRectX=leftRectX - 1;
  
  //draw location of right rectangle
  fill(38, 165,40);
  rect(450,0,50,50);
  
//draw location of left rectangle
  fill(38, 165,40);
  rect(0,0,50,50);
  
  
}