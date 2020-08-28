const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,tanker;
var obstacle1;

function setup() {
    createCanvas(400,200);
    engine = Engine.create();
     world = engine.world;
     

    ground=new Ground(200,195,400,20);
  
    tanker=new Tanker(30,180,40,10);
    tanker1=new Tanker(30,160,35,30);
    tanker2=new Tanker(30,136,17,17);
    tanker3=new Tanker(52,136,27,10);
    obstacle1=new Obstacle(345,176,20,20);
    obstacle2=new Obstacle(365,176,20,20);
    obstacle3=new Obstacle(385,176,20,20);
    obstacle4=new Obstacle(325,176,20,20);
    obstacle5=new Obstacle(345,156,20,20);
    obstacle6=new Obstacle(365,156,20,20);
    obstacle7=new Obstacle(385,156,20,20);
    obstacle8=new Obstacle(325,156,20,20);
    obstacle9=new Obstacle(355,136,20,20);
    obstacle10=new Obstacle(375,136,20,20);
    obstacle11=new Obstacle(335,136,20,20);
    obstacle12=new Obstacle(355,116,20,20);
    obstacle13=new Obstacle(375,116,20,20);
    obstacle14=new Obstacle(335,116,20,20);
    obstacle15=new Obstacle(365,96,20,20);
    obstacle16=new Obstacle(345,96,20,20);
    obstacle17=new Obstacle(365,76,20,20);
    obstacle18=new Obstacle(345,76,20,20);
    obstacle19=new Obstacle(355,56,20,20);
    obstacle20=new Obstacle(355,36,20,20);
}

function draw() {
    background(255);  
    Engine.update(engine);
   
   // if(obstacle1.y=100){
    //obstacle1.velocityY=1;
    //}
   // if(obstacle1.y>160){
//obstacle1.velocityY=-1;
   // }
   // if(obstacle1.y<20){
     //   obstacle1.velocityY=1;
         //   }
         text("The Tank Game",150,70);
ground.display();
tanker.display();
tanker1.display();
tanker2.display();
tanker3.display();
obstacle1.display();
obstacle2.display();
obstacle3.display();
obstacle4.display();
obstacle5.display();
obstacle6.display();
obstacle7.display();
obstacle8.display();
obstacle9.display();
obstacle10.display();
obstacle11.display();
obstacle12.display();
obstacle13.display();
obstacle14.display();
obstacle15.display();
obstacle16.display();
obstacle17.display();
obstacle18.display();
obstacle19.display();
obstacle20.display();

}


function keyReleased() {
   

}