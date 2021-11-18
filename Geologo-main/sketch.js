const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world,Bodies;
var hammer,plane;
var hierro,hule;
//var pelota;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hierro = new objetos(300,550,100,40);
    hule = new objetos(500,530,200,80);
    hammer = new Hammer (10,100);
    //pelota = new Rubber (300,30,)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hierro.display();
    hule.display();
    hammer.display();

    
 
}