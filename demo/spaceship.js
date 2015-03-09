/*globals SpaceObject*/
window.SpaceShip = (function() {
	"use strict";

	function SpaceShip(coordinate, vCoordinate, image, star) {
		SpaceObject.call(this, coordinate, vCoordinate, image, star);
		this.className = " spaceobject";
		this.rotation = 0; // radian 2*PI
		this.speed = 0; // radian 2*PI
	}

	SpaceShip.prototype = new SpaceObject();
	SpaceShip.prototype.constructor = SpaceShip;
	
	SpaceShip.prototype.oneStep = function() {
		SpaceObject.prototype.oneStep.call(this);
	}
	
	SpaceShip.prototype.goLeft = function() {
		this.rotation -= 1;
		console.log(this.rotation);
	}
	
	SpaceShip.prototype.goRight = function() {
		this.rotation -= 1;
		console.log(this.rotation);
	}
	
	SpaceShip.prototype.speedUp = function() {
		this.speed += 1;
		console.log(this.speed);
	}

	return SpaceShip;
}());