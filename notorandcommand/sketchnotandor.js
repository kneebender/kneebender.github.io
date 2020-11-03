function setup() {
    createCanvas(800, 800);
   
  }
  
  function draw() {
    background(230);

    if (mouseX > 400 && mouseY < 400){
        text ("øverst til højre", mouseX, mouseY);

    }

    if (mouseX > 400 && mouseY > 400){
        text ("nederst til højre", mouseX, mouseY);
        
    }
    if (mouseX < 400 && mouseY < 400){
        text ("øverst til venstre", mouseX, mouseY);
        
    }
    if (mouseX < 400 && mouseY > 400){
        text ("nederst til venstre", mouseX, mouseY);
        
    }



}