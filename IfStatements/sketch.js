// Marie Fabozzi
// IGME-609
// Practice Exercise
// February 21, 2019

var x = 0;
var speed = 0.5;
var num;

function setup() {
  num = 4;
  createCanvas(600, 600);
}

function draw() {
  

  
  //if else statement
  if (mouseX > 300) {
   background(150, 160, 126); 
  } else {
    background(126, 160, 153);
  }

// if statement about changing background to periwinkle
        if (keyIsPressed && key == 'p'){
    background(126, 132, 160);
      }
  
    //moving ellipse on bottom of screen
  stroke(6, 244, 238);
  strokeWeight(2);
  noFill();
  ellipse (x, 300, 115, 115);

  //speed of ellipse
  x=x+speed;
  
if (num==4) {
  stroke(255);
 textSize(85); 
 text('4', width/3,height/5);
} else if (num==7) {
  value='FALSE';
} else {
  value='FALSE'
}
  

  
}