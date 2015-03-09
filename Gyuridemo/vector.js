window.Vector = (function() {
	"use strict";

	function Vector(x, y) {
		this.x = x;
		this.y = y;
	}
	
	Vector.prototype.shift  = function(vector) {
		return new Vector(this.x + vector.x, this.y + vector.y);
	}
	
	Vector.prototype.distance = function(vector) {
		var d = Math.pow((vector.x - this.x), 2) + Math.pow((vector.y - this.y), 2);
		return Math.sqrt(d);
	}

	return Vector;
}());