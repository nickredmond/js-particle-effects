// Constructor
var Particle = function(lifeSpanSeconds, colors, radii, stage){
  // Call to super constructor with reference to this Particle
  Graphic.call(this, stage);

  this.lifeSpanSeconds = lifeSpanSeconds;
  this.colors = colors;
  this.radii = radii;

  this.currentRadius = radii[0].radius;
  this.currentColor = colors[0].color;

  this.xVelocity = 0;
  this.yVelocity = 0;
  this.xPosition = 0;
  this.yPosition = 0;
  this.xAcceleration = 0;
  this.yAcceleration = 0;
  this.age = 0;

  // TODO: this.shape = new createjs.Shape();

  // Private method: only accessible by privelaged methods
  function updateColor(dt){

  }

  function updateRadius(dt){

  }

  // Privelaged method: can access private methods, and can be accessed by 
  // public methods
  this.updateTraits = function(dt){
    updateColor(dt);
    updateRadius(dt);
  }

  this.performAging = function(dt){
    this.age += dt;

    if (this.age >= this.lifeSpanSeconds){
      this.stage.removeChild(this.shape);
    }
  }
};

// these two lines make Particle inherit from Graphic
Particle.prototype = Object.create(Graphic.prototype);
Particle.prototype.constructor = Particle;

Particle.prototype.update = function(dt){
  this.xPosition += this.xVelocity; // TODO: replace w/ this.shape.x += xVelocity;
  this.yPosition += this.yVelocity;
  this.xVelocity += this.xAcceleration;
  this.yVelocity += this.yAcceleration;

  updateTraits(dt);
  performAging(dt);
};

Particle.prototype.draw = function(){

};

Particle.prototype.isAlive = function(){
  return (this.age < this.lifeSpanSeconds);
};