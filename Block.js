class Block{
  constructor(x, y) {
    var options={
      'restitution':1,
      'friction':1,
      'density':1,
      'frictionAir':0.2
    }
    this.body = Bodies.rectangle(x, y, 90,30, options);
    this.width=90;
    this.height=30; 
    World.add(world, this.body);
  }
  display(){
    translate(this.body.position.x,this.body.position.y);
    strokeWeight(4);
    stroke("black");
    fill("white");
    rectMode(CENTER);
    rect(0,0, this.width, this.height);
    }
};

 