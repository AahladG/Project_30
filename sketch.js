const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600, 390, 1200, 10, "#382C2C");
    base1 = new Ground(400, 250, 300, 10, "lightsalmon");
    base2 = new Ground(750, 150, 300, 10, "#BBFFFF");

    poly = new Poly();

    sling = new Sling(poly.body, {x:100, y:200});

    fill("#043927");
    box1 = new Box(310, 220, "#2E8B57");
    box2 = new Box(340, 220, "#2E8B57");
    box3 = new Box(370, 220, "#2E8B57");
    box4 = new Box(400, 220, "#2E8B57");
    box5 = new Box(430, 220, "#2E8B57");
    box6 = new Box(460, 220, "#2E8B57");
    box7 = new Box(340, 180, "#0F52BA");
    box8 = new Box(370, 180, "#0F52BA");
    box9 = new Box(400, 180, "#0F52BA");
    box10 = new Box(430,180, "#0F52BA");
    box11 = new Box(370, 140, "#97FB98");
    box12 = new Box(400, 140, "#97FB98");
    box13 = new Box(670, 120, "#DE73FF");
    box14 = new Box(700, 120, "#DE73FF");
    box15 = new Box(730, 120, "#DE73FF");
    box16 = new Box(760, 120, "#DE73FF");
    box17 = new Box(790, 120, "#DE73FF");
    box18 = new Box(700, 80, "#EFC5B5");
    box19 = new Box(730, 80, "#EFC5B5");
    box20 = new Box(760, 80, "#EFC5B5");
    box21 = new Box(730, 40, "#FDEE73");
}

function draw(){
    background("#382C2C");
    Engine.update(engine);
    //noStroke();
    ground1.display();
    base1.display();
    base2.display();
    poly.display();
    sling.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    text(mouseX + "," + mouseY, mouseX, mouseY);
}

function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}

function keyPressed(){
    if(keyCode==32){
        sling.attach(poly.body);
    }
}

function mouseReleased(){
    sling.fly();
}