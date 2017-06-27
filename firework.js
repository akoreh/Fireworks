
function Firework(burstSound){

  this.color = random(255);
  this.firework = new Particle(random(width), height, this.color, true);
  this.exploded = false;
  this.particles = [];
  this.burstSound = burstSound;


  this.update = function(){
    if(!this.exploded){
      this.firework.applyForce(gravity);
      this.firework.update();

      if(this.firework.velocity.y >= 0){
        this.exploded = true;
        this.explode();
        this.burstSound.play();
      }
    }else{
      for(var i = this.particles.length-1; i >= 0; i--){
        this.particles[i].applyForce(gravity);
        this.particles[i].update();

        if(this.particles[i].isDone()){
          this.particles.splice(i,1);
        }
      }
    }
  }

  this.draw = function(){

    if(!this.exploded){
      this.firework.draw();
    }

    for(var i=0; i<this.particles.length; i++){
      this.particles[i].draw();
    }
  }

  this.explode = function(){

    for(var i=0; i<100; i++){
      var p = new Particle(this.firework.position.x, this.firework.position.y, this.color, false);
      this.particles.push(p);
    }

  }

  this.isDone = function(){
    return this.exploded && this.particles.length == 0;
  }
}
