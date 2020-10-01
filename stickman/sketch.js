function setup(){
  createCanvas( 500, 600, WEBGL);
  frameRate(3);
  randomAxis=random(1,3);
  
}

function draw(){
  frameRate(60);
  background(220);
  // Draw Stickman
  translate(100, 50); 
  line(0, 25, 0, 60);
  ellipse(0, 15, 20, 20);
  ellipse(-4, 12, 4, 4);
  ellipse(4, 12, 4, 4);
  ellipse(0, 19, 10, 2);
  push();
  translate(0, 30);
  rotate(radians(60));
  line(0, 0, 30, 0);
  rotate(radians(60));
  line(0, 0, 30, 0);
  pop(); 
  
   translate(0, 60);
  //venstre arm
  rotate(radians(70));
  line(0, 0, 40, 0);
  //højre arm
  rotate(radians(40));
  line(0, 0, 40, 0);
  
  if (randomAxis==1)
    {
    rotateX(millis() / 1000);
    }
  
    else if (randomAxis==2)
      {
      rotateY(millis() / 1000);
      }
    else if (randomAxis==3)
      {
      rotateY(millis() / 1000);
      }    
  
}