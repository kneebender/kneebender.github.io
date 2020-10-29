function setup() {
    createCanvas(800, 400);
   
  }
  
  function draw() {
    background(230);

    if (mousex > 400 && mouseY < 400){
        text ("Det er bare dig der er farveblind", mousex, mouseY);

    }

    if (mousex > 400 && mouseY > 400){
        text ("Det er bare dig der er farveblind", mousex, mouseY);
        
    }
    if (mousex > 400 && mouseY < 400){
        text ("Det er bare dig der er farveblind", mousex, mouseY);
        
    }
    if (mousex > 400 && mouseY > 400){
        text ("Det er bare dig der er farveblind", mousex, mouseY);
        
    }



}