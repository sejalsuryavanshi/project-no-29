const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var ground2;
var ground3;
var block1,block2,block3,block4,block5,block6;
var pink1,pink2,pink3,pink4;
var pink5,pink6;
var pink7;
var block8,block9,block10,block11,block12,block13;
var dark1,dark2,dark3,dark4;
var main1
var chain1;


function preload(){
polygon_img=loadImage("polygon.png")
}
function setup(){
createCanvas(1500,750)
engine = Engine.create()
world = engine.world;
Engine.run(engine);

ground1= new Ground(1200,400,400,15);
ground2= new Ground(650,550,400,20);
ground3= new Ground(750,750,1500,60);
block1= new Block(1200,390,50,50);
block2= new Block(1149,390,50,50);
block3= new Block(1251,390,50,50);
block4= new Block(1102,390,50,50);
block5 = new Block(1260,390,50,50);
block6= new Block(1300,390,50,50)
pink1= new Pink(1200,390,50,50);
pink2= new Pink(1149,390,50,50);
pink3= new Pink(1251,390,50,50);
pink4= new Pink(1102,390,50,50);
pink5=new Pink(1150,300,50,50);
pink6=new Pink(1100,300,50,50)
pink7=new Block(1100,260,50,50)

block8= new Purple(650,540,50,50);
block9= new Purple(600,540,50,50);
block10= new Purple(550,540,50,50);
block11= new Purple(700,540,50,50);
block12 = new Purple(750,540,50,50);
block13= new Purple(1300,380,50,50)
//main1=new Main(170,550,40,40)
dark1= new Dark(650,500,50,50);
dark2= new Dark(600,540,50,50);
dark3= new Purple(650,460,50,50);
dark4= new Dark(700,540,50,50);
chain1=new Chain(this.ball,{x:240,y:420})
}

function draw(){
    background("#3C2E2E")
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();
    block1.display();
    block2.display();
    //block3.display();
    block4.display();
    //block5.display();
    //block6.display();
    pink1.display();
    pink2.display();
    pink3.display();
    pink4.display();
    pink5.display()
    pink6.display()
    pink7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    //block13.display()
   //main1.display();
  dark1.display();
    dark2.display();
   dark3.display();
    dark4.display();
    imageMode (CENTER);
    image(polygon_img ,ball.position.x,ball.position.y,40,40);
    chain1.display();
}


function mouseDragged(){
	Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

//function mouseReleased(){
 // chain1.fly();
//}