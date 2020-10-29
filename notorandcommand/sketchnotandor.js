function setup() {
    createCanvas(800, 800);
   
  }
  
  function draw() {
    background(230);

    if (mouseX > 400 && mouseY < 400){
        text ("Det er bare dig der er farveblind", mouseX, mouseY);

    }

    if (mouseX > 400 && mouseY > 400){
        text ("Det er bare dig der er farveblind", mouseX, mouseY);
        
    }
    if (mouseX < 400 && mouseY < 400){
        text ("Det er bare dig der er farveblind", mouseX, mouseY);
        
    }
    if (mouseX < 400 && mouseY > 400){
        text ("Det er bare dig der er farveblind", mouseX, mouseY);
        
    }



}