/*globals SpaceObject*/
window.Planet = (function() {
	"use strict";

	function Planet(coordinate, vCoordinate, image, star) {
		SpaceObject.call(this, coordinate, vCoordinate, image, star);
		this.className = " spaceobject";
	}
	Planet.prototype = new SpaceObject();
	Planet.prototype.constructor = Planet;

	return Planet;
}());