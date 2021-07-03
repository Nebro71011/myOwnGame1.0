class Player{
    constructor(x,y){
        var options={
            'friction':1,
            'density':1,
            'restitution':0.1,
            'frictionAir':0.2
        }
        this.player=Bodies.rectangle(x,y,30,30,options);
        this.width=30;
        this.height=30;
        World.add(world,this.player);
    }

    display(){
        push();
        translate(this.player.position.x,this.player.position.y);
        stroke("white");
        fill("black");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        
        if(keyIsDown(UP_ARROW)){
            this.player.position.y=this.player.position.y-5;
        }
        if(keyIsDown(DOWN_ARROW)){
            this.player.position.y=this.player.position.y+2;
        }
        if(keyIsDown(RIGHT_ARROW)){
            this.player.position.x=this.player.position.x+2;
        }
        if(keyIsDown(LEFT_ARROW)){
            this.player.position.x=this.player.position.x-2;
        }
        pop();
    }
}