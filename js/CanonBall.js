class CanonBall {
  constructor(x, y,width,height) {
    this.image = loadImage("assets/canonBall.png");
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
}
this.body = Bodies.rectangle(x, y, width, height,options);
this.x=x;
this.y=y;
this.width = width;
this.height = height;
World.add(world, this.body);
image(this.image, this.body.position.x, this.body.position.y, 50, 50);
  };

  display(){
    rect(this.body.position.x, this.body.position.y, this.width, this.height);
  };
};
