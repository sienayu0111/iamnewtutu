function setup() {
  createCanvas(700, 1000);
   
}

function draw() {
  background(220);
  strokeWeight(5)
  
  strokeWeight(0)
  fill(134,73,19)
  quad(176,288,140,215,480,195,461,248)
  quad(140,215,183,147,390,116,480,195)
  triangle(183,147,266,107,390,116)
  
  strokeWeight(3)
  
  fill(134,73,19)
  beginShape();
  vertex(176,288)
  bezier(176,288,128,274,128,260,140,215);
  bezier(140,215,130,234,160,160,183,147);
  bezier(183,147,200,134,200,120,266,107);
  bezier(266,107,310,100,328,92,390,116);
  bezier(390,116,452,141,478,183,480,195);
  bezier(480,195,482,205,494,232,461,248);
  line(461,248,176,288)
  endShape()
  
  
  
  /////頭髮
  strokeWeight(0)
  fill(255, 184, 77);
beginShape();
vertex(155, 446);
vertex(188, 420);
vertex(440, 205);
vertex(439, 575);
vertex(352, 562);
vertex(170, 580);
endShape();
  
  beginShape()
  vertex(155, 446);
vertex(251, 200);
vertex(440, 205);
vertex(439, 575);
vertex(352, 562);
vertex(170, 580);
endShape();
  
    beginShape()
  vertex(352, 562);
vertex(178, 230);
vertex(440,205);
vertex(181, 296);
vertex(352, 562);
vertex(200, 580);
endShape();
  
      beginShape()
  vertex(149, 367);
vertex(181, 296);
vertex(440,205);
vertex(181, 296);
vertex(352, 562);
vertex(200, 580);
endShape();
  
    beginShape()
  vertex( );
vertex(476, 384);
vertex(448,242);
vertex(181, 296);
vertex(352, 562);
vertex(200, 580);
endShape();
  
    beginShape()
  vertex(448,384 );
vertex(460, 255);
vertex(480,324);
vertex(478,370);
endShape();
  
   beginShape()
  vertex(477,312 );
vertex(482, 312);
vertex(477,390);
vertex(478,370);
endShape();
  
    beginShape()
  vertex(477,379 );
vertex(477, 469);
vertex(480,470);
vertex(440,470);
  vertex(430,380)
endShape();
  
    beginShape()
  vertex(450,570 );
vertex(440, 470);
vertex(477,390);
vertex(450,570);
endShape();
  
  
    beginShape()
  vertex(435,570 );
vertex(440,460);
vertex(480,550);
vertex();
endShape();
  
  beginShape()
  vertex(176,234 );
vertex(178,295);
vertex(240,290);
vertex(225,221);
endShape();
  
   beginShape()
  vertex(163,516);
vertex(151,450);
vertex(483,452);
vertex(458,486);
  vertex(475,516);
  vertex(480,533);
  vertex(168,525)
endShape();
  
   beginShape()
  vertex(166,517);
vertex(144,497);
vertex(146,458);
vertex(182,442);
endShape();
  
    beginShape()
  vertex(442,245);
vertex(466,266);
vertex(465,295);
vertex(428,289);
endShape();
  
  
  ///////
  strokeWeight(5)
  point(480,550)
  fill(255, 184, 77)
  vertex(429,576)
  
  bezier(218,575,85,620,151,570,165,537);
  bezier(150,503,131,484,131,477,154,448);
  bezier(149,367,154,349,144,329,181,296);
  bezier(482,310,511,322,470,372,476,384)
  bezier(476,384,481,396,509,450,477,468)
  bezier(178,234,191,210,334,166,443,203);
  bezier(477,516,481,527,508,573,429,576)
  bezier(181,296,176,278,165,256,178,234);
  
  noFill();
  stroke(0, 0, 0);
  bezier(429,576,312,523,334,544,218,575);
  bezier(165,537,167,523,167,522,150,503);
  bezier(154,448,176,419,144,384,149,367);
  bezier(443,203,434,231,437,241,460,256);
  bezier(477,468,445,487,473,505,477,516);
  bezier(460,256,484,270,452,297,482,310);
  
  
  fill(134,73,19)
  strokeWeight(3)
  circle(270,100,41)
  
  strokeWeight(2)
  fill(255,230,204);
  beginShape();
  vertex(200, 290);
  bezierVertex(100, 500, 500, 500, 430, 290);
  bezierVertex(430, 250, 430, 250, 375, 215);
  bezierVertex(355, 270, 355, 270, 200, 290);
  endShape();
  //臉的部分
  fill(153,235,255)
  ellipse(244,332,26,32)
  ellipse(376,332,26,32)
  //
  strokeWeight(0)
  fill(255, 153, 102)
  circle(229,389,32)
  circle(390,389,32)  

  
strokeWeight(2)
  fill(255, 184, 77)
  beginShape();
  vertex(429,576)
  bezier(429,576);
  
  line()
  endShape()
  
  noFill()
  beginShape()
  vertex(294,376)
  bezierVertex(302,383,310,381,318,376)
  endShape()
  bezier(230,297,238,289,243,287,255,297);
  bezier(363,297,371,289,376,287,388,297);
  
 // fill(0,0,0)
  //quad(281,473,345,473,345,598,281,599)
  
  fill(255,230,204);
  beginShape();
  vertex(285, 447);
  bezierVertex(285, 460, 285, 460, 270, 477);
  bezierVertex(304, 490, 304, 490, 338, 477);
  bezierVertex(323, 460, 323, 460, 323, 447);
  bezierVertex(302, 449, 302, 449, 285, 447);
  endShape();
  
  fill(255,255,255);
  beginShape();
  vertex(270,477);
  bezierVertex(304, 490, 304, 490, 338, 477);
  bezierVertex(420, 480, 420, 480, 460, 700);
  bezierVertex(148, 700, 148, 700, 148, 700);
  bezierVertex(188, 480, 188, 480, 270, 477);
  endShape();
  
  fill(255,255,255);
  beginShape();
  vertex(270,477);
  bezierVertex(304, 490, 304, 490, 338, 477);
  bezierVertex(358, 477, 358, 477, 358, 477);
  bezierVertex(304, 500, 304, 500, 250, 477);
  endShape();
  
  fill(0,0,0);
  beginShape();
  vertex(250,477);
  bezierVertex(304, 500, 304, 500, 358, 477);
  bezierVertex(358, 700, 358, 700, 358, 700);
  bezierVertex(250, 700, 250, 700, 250, 700);
  bezierVertex(250, 477, 250, 477, 250, 477);
  endShape();
  
  fill(255,255,255);
  ellipse(304, 490, 15, 10);
  
  fill(255,255,255)
  beginShape()
  vertex(280,530);
  bezierVertex(274,509,276,505,298,492)
  bezierVertex(300,517,298,525,280,530)
  endShape()
  
  beginShape()
  vertex(330,530)
  bezierVertex(338,509,332,505,312,492)
  bezierVertex(297,517,320,525,330,530)
  endShape()
  
  fill(0,82,102)
  circle(244,335,20)
  circle(376,335,20)
  
  strokeWeight(1)
  fill(255,255,255)
  circle(237,323,6)
  circle(369,323,6)
  
  
}
