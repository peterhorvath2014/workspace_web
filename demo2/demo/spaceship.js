/*globals SpaceObject*/
window.SpaceShip = (function() {
	"use strict";

	function SpaceShip(pos, v, star) {
		SpaceObject.call(this, pos, v, star);
		this.rotation = 0; //radian 2*PI
	}
	
	SpaceShip.prototype = new SpaceObject();
	SpaceShip.prototype.constructor = Planet;

	hozzáad
	kivon
	
	return SpaceShip;
}());