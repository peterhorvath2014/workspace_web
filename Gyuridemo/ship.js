window.Ship = (function () {
  "use strict";

  function Ship(position, speed, star, rotation) {
    SpaceObject.call(this, position, speed);
    this.star = star;
    this.rotation = rotation;
    this.rotationPos = 180;
    this.vrotation = 2;
    this.enabledrotation = false;
    this.enabledspeedinc = false;
  }
  
  Ship.prototype = new SpaceObject();
  Ship.prototype.constructor = Ship;

  Ship.prototype.oneStep = function() {
	  Planet.prototype.oneStep.call(this);
	  if(this.enabledrotation) {
		  if(this.rotation === "J") {
			  this.rotationPos -= this.vrotation;
		  }
		  else {
			  this.rotationPos += this.vrotation;
		  }
	  }
	  
	  if(this.enabledspeedinc) {
		  this.increaseSpeed();
	  }
  }
  
  Ship.prototype.increaseSpeed = function() {
	  this.speed = new Vector (
			  this.speed.x - 0.3 * Math.sin(this.rotationPos * Math.PI / 180) , 
			  this.speed.y + 0.3 * Math.cos(this.rotationPos * Math.PI / 180)); 
  }

  return Ship;
}());