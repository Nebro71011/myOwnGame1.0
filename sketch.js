const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var player,ground,block;
var blocks=[];

function setup(){
    createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

     player=new Player(200,300);
     ground=new Ground(200,590,400,20);
    

     if(frameCount % 150 === 0){

        for(var i=0; i<100; i++){
            blocks.push(new Block(Math.round(random(90,310)),10));
        }

    }
}

function draw(){
    background("green");
    Engine.update(engine);

     player.display();
     ground.display();

     for(i=0; i<100; i++){
         blocks[i].display();
     }
    
}