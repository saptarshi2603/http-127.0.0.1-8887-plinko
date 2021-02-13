const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var divisionHeight=300;
var engine, world;
var particles=[];
var division=[];
var plinko=[];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;



    ground1 = new ground(600,height,1200,20);

for(var k=0 ;k<=width;k=k+80){
division.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
}

for (var j = 75; j <=width; j=j+50) 
{

   plinko.push(new Plinko(j,75));
}

for (var j = 50; j <=width-10; j=j+50) 
{

   plinko.push(new Plinko(j,175));
}

 for (var j = 75; j <=width; j=j+50) 
{

   plinko.push(new Plinko(j,275));
}

 for (var j = 50; j <=width-10; j=j+50) 
{

   plinko.push(new Plinko(j,375));
}
}





function draw() {
  background(0);  
  Engine.update(engine);
  ground1.display();

  for(var k=0;k<division.length;k++){
    division[k].display();
    }

    for(var j=0;j<particles.length;j++){
      particles[j].display();


    }
    for (var i = 0; i < plinko.length; i++) {
  
     plinko[i].display();
    }
if(frameCount%60===0){
particles.push(new Particle(random(width/2-10,width/2+10),10,10))

}



  drawSprites();
}