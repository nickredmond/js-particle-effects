var Graphic = function(stage){
  this.stage = stage;
  this.shape = new createjs.Shape();
};

Graphic.prototype.update = function(dt){
  throw 'Must implement in a subclass';
};

Graphic.prototype.draw = function(){
  throw 'Must implement in a subclass';
};