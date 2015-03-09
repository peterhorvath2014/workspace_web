window.SpaceObject = (function() {
	"use strict";

	var G = 500;

	function SpaceObject(coordinate, vCoordinate, image, star) {
		this.coordinate = coordinate;
		this.vCoordinate = vCoordinate;
		this.star = star;
		this.name = "spaceObject" + Math.floor(Math.random() * 1000000);
		this.image = "assets/" + (image || "defaultimage.png");
	}

	SpaceObject.prototype.oneStep = function() {
		if (this.star != null) {
			var force = this.calculateGForce(this.star.coordinate);
			var distance = this.coordinate.distance(this.star.coordinate);
			var xDiff = this.star.coordinate.x - this.coordinate.x;
			var yDiff = this.star.coordinate.y - this.coordinate.y;
			this.vCoordinate.x += force * (xDiff) / distance;
			this.vCoordinate.y += force * (yDiff) / distance;

			/*
			 * console.log("distance: " + distance); console.log("star x: " +
			 * this.star.coordinate.x); console.log("star y: " +
			 * this.star.coordinate.y); console.log("x: " + this.coordinate.x);
			 * console.log("y: " + this.coordinate.y); console.log("xDiff: " +
			 * xDiff); console.log("yDiff: " + yDiff); console.log("vCoordinate
			 * x: " + this.vCoordinate.x); console.log("vCoordinate y: " +
			 * this.vCoordinate.y);
			 */
			this.coordinate.add(this.vCoordinate);
		}
	}

	SpaceObject.prototype.calculateGForce = function(another) {
		return G / Math.pow(this.coordinate.distance(another), 2);
	};

	return SpaceObject;
}());