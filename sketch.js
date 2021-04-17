
function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);
}

function draw() {
  background("black");
  Translate(200,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scangle = map(sc,0,60,0,360);
  mnangle = map(mn,0,60,0,360);
  hrangle = map(hr%12,0,12,0,360);
  Push();
  rotate(scangle);
  //rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7); 
  line(0,0,100,0);
  Pop();

  push();
  rotate(mnangle);
  //rotate the hand based on angle calculated
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  stroke(255,0,255);
  Point(0,0);
  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  stroke(0,255,0);
  arc(0,0,280,280,0,mnAngle);
  stoke(0,0,255);
  arc(0,0,260,260,0,hrAngle)

  drawSprites();
}