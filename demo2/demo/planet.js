/*globals SpaceObject*/
window.Planet = (function() {
	"use strict";

	function Planet(pos, v, star) {
		SpaceObject.call(this, pos, v, star);
	}

	Planet.prototype = new SpaceObject();
	Planet.prototype.constructor = Planet;

	return Planet;
}());