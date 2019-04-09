// HW #3
// IGME-609
// Marie Fabozzi

//declaring global variables
var bg = 0;

function setup() {
createCanvas(800, 800);
  
 //declaring range of random valuables for bg color 
 bg = random(255); 
  

  
}

function draw() {
  

 //declaring local variable range of randomSize 
 var randomSize=random(400);
  
 background(0, 55, 61);
  
  // pretty optical circles :O
  // for loop
  cursor();
  noFill();
  stroke(7, 246, 255);
  strokeWeight(1);
  for (var i=10; i<200; i+=10) {
  
   ellipse(width/2, height/2, i+100, i-100); // cyan horizontal target 
   ellipse(width/2, height/2, i-100, i+100); // cyan vertical target
    
  }
  
//  
  if(mouseIsPressed && mouseX > width/2)
  {
    // draws lines and ellipses when mouseX is on right side of canvas
   line(50, 50, 200, 200);
   line(50, 750, 200, 600);
   fill (7, 246, 255);
   ellipse (300, 300, 50);
   ellipse (260, 260, 25);
   ellipse (230, 230, 15);
    
   ellipse (300, 500, 50);
   ellipse (260, 540, 25);
   ellipse (230, 570, 15);
    
  // pattern, +25, +50, +25, -50  
  line (50, 100, 50, 700);
  line (75, 150, 75, 650);  
  line (100, 200, 100, 600);
  line (125, 250, 125, 550);
  line(150, 300, 150, 500);
  line (175, 350, 175, 450);
  line(200, 400, 200, 400);
   
  }  
  
if (mouseIsPressed) {
    fill(7, 246, 255);
    rect(width/2, height/2, 5, 5);
  
  } else {
    rect(width/2, height/2, 5, 5);
    
    // right side of square frame
    rect(700, 100, 5, 5);
    rect(700, 300, 5, 5);
    rect(700, 500, 5, 5);
    rect(700, 700, 5, 5);
    
    // left side of square frame
    rect(100, 100, 5, 5);
    rect(100, 300, 5, 5);
    rect(100, 500, 5, 5);
    rect(100, 700, 5, 5);
    
    // top of square frame
    rect(300, 100, 5, 5);
    rect(500, 100, 5, 5);
    
    // bottom of square frame
    rect(300, 700, 5, 5);
    rect(500, 700, 5, 5);

  }
  
  if (keyIsPressed && key == 'c') {
    // If the key c is pressed, the background color is randomized
    background (random(bg));
  }  
  
  if (keyIsPressed && key == 's') {
   //If s is pressed draws squares on screen in random sizes and location
    noFill();
    strokeWeight(6);
    stroke(244, 229, 66, 108);
    rect(random(width), random(height), randomSize, randomSize);
    strokeWeight(0.5);
    stroke(255, 125);
    rect(random(width), random(height), randomSize, randomSize);
    strokeWeight(2);
    stroke(252, 136, 192, 180);
    rect(random(width), random(height), randomSize, randomSize);
  }
  
  if (keyIsPressed && key == 'f') {
    //if f key is pressed, it will fill in the rectangles in the frame.
      
    fill(7, 246, 255);
        // right side of square frame
    rect(700, 100, 5, 5);
    rect(700, 300, 5, 5);
    rect(700, 500, 5, 5);
    rect(700, 700, 5, 5);
    
    // left side of square frame
    rect(100, 100, 5, 5);
    rect(100, 300, 5, 5);
    rect(100, 500, 5, 5);
    rect(100, 700, 5, 5);
    
    // top of square frame
    rect(300, 100, 5, 5);
    rect(500, 100, 5, 5);
    
    // bottom of square frame
    rect(300, 700, 5, 5);
    rect(500, 700, 5, 5);
    
      }

}

