window.SpaceObject = (function() {
	"use strict";
	
	function SpaceObject(position, speed, star) {
		this.position = position;
		this.speed = speed;
		this.star = star;
		this.G = 500;
		this.id = SpaceObject.prototype.nextId;
		SpaceObject.prototype.nextId++;
	}
	
	SpaceObject.prototype.nextId = 0;

	SpaceObject.prototype.oneStep = function() {
		//this.position = this.position.shift(this.speed);
	};

	SpaceObject.prototype.oneStep = function() {
		  // SpaceObject.prototype.oneStep(this);
		this.position = this.position.shift(this.speed);
		var d = this.position.distance(this.star.position);
		var force = this.G / Math.pow(d, 2);
		this.speed = this.speed.shift(new Vector(force
				* (this.star.position.x - this.position.x) / d, force
				* (this.star.position.y - this.position.y) / d));
	}
	
	SpaceObject.prototype.getX = function()
	{
		return this.position.x;
	}

	SpaceObject.prototype.getY = function()
	{
		return this.position.y;
	}

	return SpaceObject;
}());