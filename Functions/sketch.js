// Marie Fabozzi
// IGME-609 Project 1
// Self-Portrait
// January 31, 2019

// declare global for setup and draw
var canvasSize;

function setup() {
//Create size of canvas
  canvasSize = 800;
  createCanvas(canvasSize, canvasSize);
  
}

function draw() {
  background(204,237,161); //green bg color
  
  drawNeck();
  drawShirt();
  drawLeftPinkLight();
  drawFace();
  drawCollar();
  drawLeftPinkMidLeft();
  drawLeftPinkDark();
  drawLeftPinkMidRight();
  drawLeftPinkMidRight();
  drawRightPinkMidRight();
  drawRightPinkDarkBottom();
  drawRightPinkDarkTop();
  drawRightPinkLight();
  drawRightPinkMidLeft();
  drawRightPinkLeftMid();
  drawBottomLip();
  drawTopLip();
  drawNose();
  drawLeftEyebrow();
  drawRightEyebrow();
  drawLeftEyeWhite();
  drawRightEyeWhite();
  drawRightLightBlueEye();
  drawLeftLightBlueEye();
  drawRightEyeDarkBlue(); 
}


function drawNeck()
{
  //darker skintone neck
  noStroke();
  fill(209,182,139); //darker skintone
  beginShape();
  vertex(316,500);
  vertex(353,525);
  vertex(406,520);
  vertex(473,446);
  vertex(502,474);
  vertex(483,632);
  vertex(419,613);
  vertex(308,569);
  vertex(273,541);
  endShape(CLOSE);
}

function drawShirt()
{
  //light blue scrub
  noStroke();
  fill(152,173,211); //light blue scrub color
  beginShape();
  vertex(-17,580);
  vertex(23,563);
  vertex(61,518);
  vertex(94,490);
  vertex(113,470);
  vertex(140,391);
  vertex(166,473);
  vertex(283,541);
  vertex(316,559);
  vertex(358,572);
  vertex(410,585);
  vertex(457,601);
  vertex(476,615);
  vertex(480,567);
  vertex(619,489);
  vertex(625,429);
  vertex(769,438);
  vertex(807,432);
  vertex(851,632);
  vertex(788,664);
  vertex(770,666);
  vertex(770,742);
  vertex(763,778);
  vertex(751,805);
  vertex(766,815);
  vertex(-17,815);
  endShape(CLOSE);
}

function drawLeftPinkLight()
{
  //left pink hair light tone
  fill(226,119,175); //pink hair light tone color
  beginShape();
  vertex(230,423);
  vertex(313,507);
  vertex(294,527);
  vertex(283,555);
  vertex(279,587);
  vertex(285,617);  
  vertex(302,646);    
  vertex(324,666);    
  vertex(353,690);    
  vertex(384,703);
  vertex(325,701);
  vertex(292,681);
  vertex(243,676);
  vertex(205,606);
  vertex(199,517);
  endShape(CLOSE);  
}

function drawFace()
{
  //face
  noStroke();
  fill(219,202,170); //light skintone
  beginShape();
  vertex(140,-15);
  vertex(133,2);
  vertex(136,193);
  vertex(154,327);
  vertex(222,429);
  vertex(304,507);
  vertex(343,531);
  vertex(384,536);
  vertex(431,527);
  vertex(453,506);
  vertex(476,457);
  vertex(515,423);
  vertex(562,359);
  vertex(581,254);
  vertex(592,202);
  vertex(536,-10);
  vertex(140,-15);
  endShape(CLOSE);
}

function drawCollar()
{
    //darker blue scrub detail
  noStroke();
  fill(113,141,181); //dark blue scrub color
  beginShape();
  vertex(286,545);
  vertex(316,559);
  vertex(366,574);
  vertex(401,583);
  vertex(410,585);
  vertex(457,601);
  vertex(476,615);
  vertex(505,691);
  vertex(522,742);
  vertex(468,753);
  vertex(429,616);
  vertex(399,590);
  vertex(342,574);
  vertex(283,555);
  endShape(CLOSE);
}

  function drawLeftPinkMidLeft()
{
  //left pink hair midtone LEFT CHUNK
  fill(230,82,157); //pink midtone color
  beginShape();
  vertex(109,368);
  vertex(140,391);
  vertex(214,566);
  vertex(163,553);
  vertex(134,509);
  vertex(113,470);
  vertex(109,410);  
  endShape(CLOSE);  
}

function drawLeftPinkDark()
{   
  //left pink hair dark tone
  fill(179,66,128); //pink dark color
  beginShape();
  vertex(59,195);
  vertex(110,267);
  vertex(197,391);
  vertex(230,448);  
  vertex(209,587);
  vertex(205,606); //
  vertex(243,676); //
  vertex(292,681); //
  vertex(325,701); //
  vertex(384,703); //
  vertex(342,722); //
  vertex(312,719); //
  vertex(257,705); //
  vertex(224,704); //
  vertex(192,677); //
  vertex(178,630); //
  vertex(163,553); //
  vertex(172,513);
  vertex(149,452);
  vertex(120,399);
  vertex(97,334);
  vertex(76,280);
  vertex(60,221);
  endShape(CLOSE);
}

function drawLeftPinkMidRight()
{
  //left pink hair midtone RIGHT CHUNK
  fill(230,82,157);
  beginShape();
  vertex(292,496);
  vertex(310,512);
  vertex(320,587);
  vertex(329,618);
  vertex(363,643);
  vertex(384,703);
  vertex(363,701);
  vertex(344,691);
  vertex(298,659);
  vertex(270,587);
  vertex(283,555);
  endShape(CLOSE);
}

function drawLeftPinkMidRight()
{
  //left pink hair midtone RIGHT CHUNK
  fill(230,82,157); //pink midtone color
  beginShape();
  vertex(61,-15);
  vertex(187,-15);
  vertex(148,34);
  vertex(139,94);
  vertex(144,199);
  vertex(155,285);
  vertex(165,337);  
  vertex(197,391);
  vertex(222,429);  
  vertex(257,463);  
  vertex(262,500);  
  vertex(257,539);
  vertex(241,592);  
  vertex(249,642);  
  vertex(302,687);  
  vertex(329,703);
  vertex(257,688);  
  vertex(228,685);
  vertex(208,639);  
  vertex(205,606);  
  vertex(205,566);  
  vertex(205,455);  
  vertex(183,429);  
  vertex(158,350);  
  vertex(98,270);  
  vertex(59,200);  
  vertex(54,66);  
  endShape(CLOSE); 
}

function drawRightPinkMidRight()
{
  //right pink hair midtone RIGHT CHUNK
  fill(230,82,157);
  beginShape();
  vertex(567,278);
  vertex(588,334);
  vertex(620,395);  
  vertex(625,429);
  vertex(639,448);
  vertex(661,501);
  vertex(680,533);
  vertex(699,574);
  vertex(704,589);
  vertex(695,623);
  vertex(688,657);  
  vertex(657,685);
  vertex(672,626);
  vertex(663,567);
  vertex(605,481);
  vertex(556,386);
  vertex(550,353);
  vertex(561,333);
  vertex(567,294);
  endShape(CLOSE);
}

function drawRightPinkDarkBottom()
{  
  //right pink hair dark tone BOTTOM CHUNK
  fill(179,66,128); //pink dark color
  beginShape();
  vertex(618,363);
  vertex(625,429);
  vertex(612,465); 
  vertex(621,496);
  vertex(657,553);
  vertex(663,567);
  vertex(672,626);
  vertex(657,685);
  vertex(638,712);
  vertex(604,747);
  vertex(605,712);  
  vertex(627,666);
  vertex(608,601);
  vertex(605,529);
  vertex(586,487);
  vertex(541,410);
  vertex(528,386);
  vertex(538,375);
  vertex(550,360);
  vertex(556,343);
  endShape(CLOSE);
}

function drawRightPinkDarkTop()
{  
  //right pink hair dark tone TOP CHUNK
  fill(179,66,128); //pink dark color
  beginShape();
  vertex(523,-8);
  vertex(600,-15);
  vertex(621,41);  
  vertex(643,117);
  vertex(653,173);
  vertex(657,197);
  vertex(647,235);
  vertex(626,286);
  vertex(618,327);
  vertex(618,374);
  vertex(625,429);  
  vertex(572,350);
  vertex(567,294);
  vertex(567,260);
  vertex(562,200);
  vertex(547,157);
  vertex(544,127);
  vertex(542,94);
  vertex(536,54);
  endShape(CLOSE);
}

function drawRightPinkLight()
{
  //right pink hair light pink
  fill(226,119,175); //pink light color
  beginShape();
  vertex(567,278);
  vertex(600,360);
  vertex(583,410);  
  vertex(586,487);
  vertex(605,529);
  vertex(608,601);
  vertex(627,666);
  vertex(621,692);
  vertex(605,712);
  vertex(604,777);
  vertex(577,742);  
  vertex(572,715);
  vertex(577,670);
  vertex(567,626);
  vertex(550,581);
  vertex(547,528);
  vertex(545,496);
  vertex(559,449);
  vertex(572,370);
  vertex(554,343);
  vertex(560,320);
  endShape(CLOSE);
}

function drawRightPinkMidLeft()
{
  //right pink hair midtone LEFT CHUNK
  fill(230,82,157); //midtone pink color
  beginShape();
  vertex(567,294);
  vertex(589,343);
  vertex(573,405);
  vertex(554,505);  
  vertex(559,587);
  vertex(589,646);
  vertex(577,685);
  vertex(577,742);
  vertex(559,692);
  vertex(542,644);
  vertex(513,607);
  vertex(480,567);  
  vertex(484,536);
  vertex(491,509);
  vertex(491,488);
  vertex(476,457);
  vertex(491,429);
  vertex(506,412);
  vertex(549,358);
  endShape(CLOSE);
}

function drawRightPinkLeftMid()
{
  //right pink hair midtone LEFT CHUNK
  fill(230,82,157); //midtone pink color
  beginShape();
  vertex(567,294);
  vertex(589,343);
  vertex(573,405);
  vertex(554,505);  
  vertex(559,587);
  vertex(589,646);
  vertex(577,685);
  vertex(577,742);
  vertex(559,692);
  vertex(542,644);
  vertex(513,607);
  vertex(480,567);  
  vertex(484,536);
  vertex(491,509);
  vertex(491,488);
  vertex(476,457);
  vertex(491,429);
  vertex(506,412);
  vertex(549,358);
  endShape(CLOSE);
}

function drawBottomLip()
{
  //mouth bottom lip
  fill(192,120,120); //bottom lip color
  beginShape();
  vertex(294,465);
  vertex(339,458);
  vertex(359,456);
  vertex(376,458);
  vertex(393,456);
  vertex(408,448);
  vertex(468,439);
  vertex(437,464);
  vertex(426,471);
  vertex(411,477);
  vertex(355,485);
  vertex(339,485);
  vertex(324,481);
  endShape();
}

function drawTopLip()
{
  //mouth top lip
  fill(181,107,107); //top lip color
  beginShape();
  vertex(294,466);
  vertex(327,444);
  vertex(345,433);
  vertex(355,431);
  vertex(372,437);
  vertex(387,435);
  vertex(403,425);
  vertex(414,423);
  vertex(468,439);
  vertex(440,443);
  vertex(420,446);
  vertex(408,448);
  vertex(394,458);
  vertex(376,461);
  vertex(359,456);
  vertex(339,458);
  endShape();
}

 function drawNose()
{
  //nose
  fill(209,182,139);
  beginShape();
  vertex(345,212);
  vertex(350,242);
  vertex(347,265);
  vertex(338,278);
  vertex(316,301);
  vertex(316,312);
  vertex(325,327);
  vertex(338,332);  
  vertex(350,343);
  vertex(363,349);
  vertex(393,349);
  vertex(406,343);
  vertex(416,331);
  vertex(434,320);
  vertex(439,302);
  vertex(432,290);
  vertex(422,286);
  endShape(CLOSE);
}

 function drawLeftEyebrow()
{
  // left eyebrow
  fill(79,48,47);
  beginShape();
  vertex(183,149);
  vertex(188,130);
  vertex(212,113);
  vertex(253,103);
  vertex(301,118);
  vertex(316,150);
  vertex(276,130);
  vertex(242,127);
  vertex(208,134);
  endShape(CLOSE);
}

function drawRightEyebrow()
{
   // right eyebrow
  fill(79,48,47);
  beginShape();
  vertex(425,128);
  vertex(433,110);
  vertex(457,94);
  vertex(504,85);
  vertex(543,104);
  vertex(544,127);
  vertex(519,114);
  vertex(482,108);
  vertex(452,115);
  endShape(CLOSE);
}
  
function drawLeftEyeWhite()
{
  // left eye
  fill(255); //white
  arc(260,200,70,70,3.14,0);
}

function drawRightEyeWhite()
{
  // right eye
  fill(255); //white
  arc(475,187,70,70,3.14,0);
}

 function drawRightLightBlueEye()
{
  // right light blue circle of eye   
  fill(46,89,165);   //light blue eye
  ellipse(475,177,35);
}

function drawLeftLightBlueEye()
{
  // left light blue circle of eye
  fill(46,89,165);
  ellipse(260,190,35);  
}

function drawRightEyeDarkBlue()
{  
  // right eye dark blue
  fill(20,41,78);
  ellipse(475,177,15);
}

function drawLeftEyeDarkBlue()
{
  // left eye dark blue
  fill(20,41,78);
  ellipse(260,190,15);
}