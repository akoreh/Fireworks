

function Particle(x, y, color, firework){

  this.position = createVector(x, y);
  this.isFirework = firework;
  this.lifespan = 300;
  this.color = color;

  if(this.isFirework){
    this.velocity = createVector(0, random(-12,-17));
  }else{
    this.velocity = p5.Vector.random2D();
    var k = random(1);


    if(k < 0.3){
      this.velocity.mult(random(2, 10));
    }else if(k > 0.3 && k < 0.9){
      this.velocity.mult(random(15, 25));
    }else{
      this.velocity.mult(random(5, 10));
    }
  }
  this.acceleration = createVector(0, 0);


  this.applyForce = function(force){
    this.acceleration.add(force);
  }

  this.update = function(){

    if(!this.isFirework){
      this.velocity.mult(0.85);
      this.lifespan += -4;
    }

    this.velocity.add(this.acceleration)
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  this.draw = function(){
    colorMode(HSB);

    if(!this.isFirework){
      strokeWeight(2);
      stroke(this.color, 255, 255, this.lifespan);
    }else{
      strokeWeight(4);
      stroke(this.color, 255, 255);
    }
    point(this.position.x, this.position.y);
  }

  this.isDone = function(){
    return this.lifespan < 0;
  }
}
