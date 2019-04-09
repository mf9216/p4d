// Marie Fabozzi
// IGME-609 
// Loops P.E.
// 2/25/2019



function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
	
//starting value for rect for while loop
	var start=0; 

//ending value for rect for while loop
	var end=200;

//spacing for rectangles for while loop
	var spacing=15;
  
//change location to increase by 10 for while loop
  var location=10;
  
//define counter variable for the for loop  
  var e = 10;

//updating the counter variable  
e=e+20;  

	while (start <= end)
	 {	
		rect(start,start,spacing,spacing);
		start=start+location;
    spacing=spacing+15;
	 }
  
  for (var e=10; e<200; e=e+20) {
    ellipse (625,300,200);
    ellipse (625,300,200-20);
  	ellipse (625,300,200-40);
		ellipse (625,300, 200-60);
  	ellipse (625,300,200-80);	
  	ellipse (625,300,200-100);
    ellipse (625,300,200-120);
  	ellipse (625,300,200-140);
		ellipse (625,300, 200-160);
  	ellipse (625,300,200-180);
  }
  
  /*
	rect(0,0,10,10);
	rect(10,10,25,25);
	rect(20,20,40,40);
	rect(30,30,55,55);
	*/
  
}