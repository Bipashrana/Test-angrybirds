const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,log1,box3,box4,log2,box5,log3,log4;
var pig1,pig2,bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(940,300,70,70);
    ground = new Ground(600,400,1200,20);
    log1= new Log(820,270,20,300,PI/2);
    box3 = new Box(700,200,70,70);
   box4= new Box(940,200,70,70);
   log2= new Log(820,180,20,300,PI/2);
   box5= new Box(820,100,70,70);
   log3=new Log(760,120,20,150,PI/6);
   log4= new Log(870,120,20,150,-PI/6);
   pig1= new Pig(820,300,50,50);
   pig2= new Pig(820,200,50,50);
   bird= new Bird(100,100,50,50);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    pig1.display();
    pig2.display();
    bird.display();
}