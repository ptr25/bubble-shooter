
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
 var boxes=[]
var ground;
var gSlider;
 


function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    //Engine.run(engine);
 
   // gSlider = createSlider(0, 100, 50);
  //  gSlider.position(40, 365);
    //gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
    
    ground = new Ground(200,390,400,50);
    // Create a ground rectangle that would hold all the boxes and add it to the world.

}
 
function mousePressed() {
    if (mouseY < 350) {
        boxes.push(new Particle(mouseX, mouseY, random(10, 40)));
    }
    }

 
function draw() {
    // Draw all the elements including the slider that 
Engine.update(engine);
 
background(0);



    //var fVal = gSlider.value();
 
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].display();
    }
    ground.display();
    fill(255);
   // textSize(15);
    line(mouseX, 0, mouseX, 100);
    
   // text("Gravity " + fVal, 160, 381);
}
 
