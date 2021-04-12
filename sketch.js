const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground1, ground2,ground3;
var blue1,blue2,blue3,blue4,blue5,blue6;
var blue7, blue8, blue9, blue10, blue11, blue12 , blue13

var green3,green2,green1;
var pink1,pink2,pink3,pink4,pink5,pink6;
var purple1,purple2,purple3,purple4,purple5,purple6
var chain1
var polygon_img;

function preload(){
    polygon_img= loadImage("polygon.png")
}
 function setup(){
    createCanvas(1500,750)
    engine = Engine.create();
    world = engine.world;

    //for blocks to stand
    ground1=new Ground(1200,400,400,15);
    ground2=new Ground(650,550,400,20);
    //last ground at the end
    ground3=new Ground(750,750,1500,60);
    blue1= new Blue(1200,390,50,50);
blue2= new Blue(1149,390,50,50);
blue3= new Blue(1251,390,50,50);
blue4= new Blue(1102,390,50,50);
blue5 = new Blue(1260,390,50,50);
blue6= new Blue(1300,390,50,50)
blue7=new Blue(1100,260,50,50)
blue8= new Blue(650,540,50,50);
blue9= new Blue(600,540,50,50);
blue10= new Blue(550,540,50,50);
blue11= new Blue(700,540,50,50);
blue12 = new Blue(750,540,50,50);
blue13= new Blue(1300,380,50,50)
green1= new Green(650,500,50,50);
green2= new Green(600,540,50,50);
green3= new Green(700,540,50,50);
pink1= new Pink(1200,390,50,50);
pink2= new Pink(1149,390,50,50);
pink3= new Pink(1251,390,50,50);
pink4= new Pink(1102,390,50,50);
pink5=new Pink(1150,300,50,50);
pink6=new Pink(1100,300,50,50)
purple1= new Purple(650,540,50,50);
purple2= new Purple(600,540,50,50);
purple3= new Purple(550,540,50,50);
purple4= new Purple(700,540,50,50);
purple5 = new Purple(750,540,50,50);
purple6= new Purple(1300,380,50,50)
purple7= new Purple(650,460,50,50);

ball = Bodies.circle(50,200,20);
World.add(world,ball);

chain1= new Chain(this.ball,{x:100,y:200})
}

function draw(){
background("#3C2E2E");

textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
Engine.update(engine);

// display
ground1.display();
ground2.display();
ground3.display();
blue1.display();
blue2.display();
//blue3.display();
blue4.display();
//blue5.display();
//blue6.display();
blue7.display();
blue8.display();
blue9.display();
blue10.display();
blue11.display();
blue12.display();
//blue13.display();
green1.display();
green2.display();
green3.display();
pink1.display();
 pink2.display();
pink3.display();
pink4.display();
 pink5.display()
pink6.display()
//pink7.display();
purple1.display();
purple2.display();
purple3.display();
purple4.display();
purple5.display();
//purple6.display();
purple7.display();

imageMode(CENTER)
image(polygon_img,ball.position.x,ball.position.y,40,40)
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    chain1.fly();
  }