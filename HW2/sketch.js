// IGME-609
// Marie Fabozzi
// HW 2: Animated & Interactive Scene

//declare and intializing custom variables
var x = 37.5;
var speed = 3;
var speedB=0.5;

function setup() {
        createCanvas(800, 400);
}

function draw() {
        background(218, 148, 126); 

  //custom function to create small pink filled ellipse grid in bg
filledTransparentGrid();
  
  //custom function to create blue stroke dot grid
strokeDotGrid();
  
      //draws vertical white stripes with overlapping squares
squareStripes(); 
  
  //custom function to create movement of horizontal yellow line
horizontalLine();
  
  //custom function to create movement of vertical yellow line
verticalLine();
  
  // custom function to run key pressed code
  // which shows the lg ellipse fill dot grid
keyPressL();
  
line(mouseX, mouseY, mouseX, height/2);
  
//diagonalLine();
  
}


function keyPressL() {
   // When the l key is pressed, a large pink grid 
  // of ellipses (lg pink fill dot grid) fills the screen
  if(keyIsPressed && key == 'l')
  {

        //lg pink fill dot grid
  			fill(203,96,98);
        noStroke();
  			var diameter = 80;

        for (var e=0; e<width/diameter; e=e+1) {
          for (var i=0; i<height/diameter; i=i+1) {
          ellipse (
            diameter/2+e*diameter,
            diameter/2+i*diameter,
            diameter,
            diameter
            );
        }
     }
  }  
}

function verticalLine() {
   //vertical yellow moving line
  stroke(254, 239, 171);
  strokeWeight(2);
  line (x,50,x,200);
  
  //speed of vertical yellow moving line
  x=x+speedB; 
}

function horizontalLine() {
    //line on row 2
  stroke(254, 239, 171);
  strokeWeight(2);
  line (x,x,237.5,x);
  
  //speed of line on row 2
  x=x+speed;
}

function strokeDotGrid() {
         //stroke dot grid
  			noFill();
        stroke(139, 146, 158);
  			strokeWeight(1.5);
  			var diameter = 80;

        for (var r=0; r<width/diameter; r=r+.25) {
          for (var c=0; c<height/diameter; c=c+.25) {
          ellipse (
            diameter/2+r*diameter,
            diameter/2+c*diameter,
            diameter,
            diameter
            );
        }
        } 
}

function filledTransparentGrid() {

        //smaller filled transparency dot grid
  			fill(186, 130, 151, 97);
        noStroke();
  			var diameter = 25;

//code in this for loop controls the columns of smaller filled dots  
        for (var c=0; c<width/diameter; c=c+1) {
          
//code in this for loop controls the rows of smaller filled dots          
          for (var r=0; r<height/diameter; r=r+1) {
          ellipse (
            diameter/2+c*diameter, //repetition of columns
            diameter/2+r*diameter, // repetition of rows
            diameter,
            diameter
            );
        }
    }
}

/*function diagonalLine() {
  
  //code for diagonal white line
  stroke(255);
  strokeWeight(1);
  line(440,800,800,25); 
}
*/

function squareStripes() {
         //stroke dot grid
  			fill(255,75);
        noStroke();
  			var diameter = 5;

        for (var r=5; r<width/diameter; r=r+7) {
          for (var c=0; c<height/diameter; c=c+9) {
          rect (
            diameter/2+r*diameter,
            diameter/2+c*diameter,
            diameter,
            frameCount+.2
            );
        }
        } 
}

