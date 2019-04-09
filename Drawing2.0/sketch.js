/**
* Marie Fabozzi
* IGME-609: p5.js Drawing2.0
*/ 


function setup() {
   createCanvas(600, 600);
}


function draw() {
background(6, 34, 81); // bg color
  
  // Makes strokes white
  stroke(255);
  
  //top left constellation
  strokeWeight(1);
  line(25,25,70,200); 
  line(70,200,150,100);
  line(70,200,125,225);
  fill(252, 171, 171); // pink color
  strokeWeight(1);
  noStroke();
  ellipse(25,25,8); // top circle
  noStroke();
  ellipse(70,200,10); // mid circle left
  ellipse(150,100,15); // top right circle
  ellipse(125,225,15); // bottom circle
  
  // rect shape
  noFill();
  stroke(171, 252, 229);
  strokeWeight(4);
  rect(300,100,200,200);
  
  // points
  strokeWeight(2);
  point(50,50);
  point(100,100);
  point(500,500);
  point(450,50);
  point(550,200);
  point(80,570);
  
  // bottom left constellation
  fill(252,171,171)
  line(25,325,80,340);
  line(80,340,200,320);
  line(80,340,50,450);
  line(50,450,200,550);
  line(200,550,175,490);
  noStroke();
  ellipse(25,325,6); // top left circle
  
  noStroke();
  ellipse(80,340,15); // top mid circle
  ellipse(200,320,10); // right top circle
  ellipse(50,450,15); // mid circle
  ellipse(200,550,15); // bottom circle
  ellipse(175,490,6); // mid bottom circle
  
  // quad
  noFill();
  stroke(252, 171, 171);
  quad(200,400,400,250,570,375,325,450);
  
  // triangle
  noStroke();
  fill(171, 252, 229, );
  triangle(450,500,440,550,365,450);
}

 