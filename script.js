//module aliases

var Engine = Matter.Engine
var Render = Matter.Render
var World = Matter.World
var Bodies = Matter.Bodies;


var engine;
var world;
var boxes = [];

var ground;

function setup() {
    createCanvas(1200, 1200);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine); 
    var options = {
        isStatic: true
    }
    ground = Bodies.rectangle(600, height, width, 10, options); 
    World.add(world, ground);   
}

function mouseDragged() {
    boxes.push(new Box(mouseX, mouseY, 30, 30));
}

function draw() {
    background(0);
    
    for(var i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }

    fill( 137, 207, 240);
    noStroke();
    rectMode(CENTER);
    rect(600, height, width, 10);

}