

var fireworks = [];
var gravity;
var burstSound;


function preload(){
  burstSound = loadSound('sounds/burst.wav');
}

function setup(){
  createCanvas(window.innerWidth-3.51, window.innerHeight-3.51);
  colorMode(HSB);
  stroke(255);
  strokeWeight(4);

  gravity = createVector(0, 0.2);



}

function draw(){


  colorMode(RGB);
  background(0, 0, 0, 25);

  if(random(1) < 0.02){
    fireworks.push(new Firework(burstSound));
  }

  for(var i = fireworks.length-1; i >= 0; i--){
    if(!fireworks[i].isDone()){
      fireworks[i].update();
      fireworks[i].draw();
    }else{
      fireworks.splice(i, 1);
    }
  }

}
