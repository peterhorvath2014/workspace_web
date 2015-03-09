window.Vector = (function() {
	"use strict";

	function Vector(x, y) {
		this.x = x;
		this.y = y;
	}

	Vector.prototype.add = function(another) {
		this.x += another.x;
		this.y += another.y;
	}

	Vector.prototype.distance = function distance(another) {
		var xDiff = Math.abs(this.x - another.x);
		var yDiff = Math.abs(this.y - another.y);

		return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
	}

	return Vector;
}());