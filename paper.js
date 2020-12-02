class paper {
    constructor(x, y, height, width) {
        var options = {
            'restitution':1,
            'friction':0.3,
            'density':1.2
      }
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;

       World.add(world, this.body);
      }


      display() {
           ellipseMode(CENTER);
           strokeWeight(2);
           stroke("lightblue");
           fill(0);
           ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
      }
}