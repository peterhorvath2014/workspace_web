window.Missile = (function() {
	"use strict";

	function Missile(position, speed, star, rotationPos, created) {
		SpaceObject.call(this, position, speed);
		this.star = star;
		this.rotationPos = rotationPos + 180;
	    this.created = created;
	}

	Missile.prototype = new SpaceObject();
	Missile.prototype.constructor = Missile;

	return Missile;
}());