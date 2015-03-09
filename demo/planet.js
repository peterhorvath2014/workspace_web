/*globals SpaceObject*/
window.Planet = (function () {
  "use strict";

  function Planet(coordinate, vCoordinate, star, image) {
    SpaceObject.call(this, coordinate, vCoordinate, image);
    this.star = star;
    this.className = " spaceobject";
  }
  Planet.prototype = new SpaceObject();
  Planet.prototype.constructor = Planet;
  
  Planet.prototype.oneStep = function oneStep() {
		var force = this.coordinate.force(this.star.coordinate);
		var distance = this.coordinate.distance(this.star.coordinate);
		var xDiff = this.star.coordinate.x - this.coordinate.x;
		var yDiff = this.star.coordinate.y - this.coordinate.y;
		this.vCoordinate.x += force * (xDiff) / distance;
		this.vCoordinate.y += force * (yDiff) / distance;
		
		console.log("force: " + force);
		console.log("distance: " + distance);
		console.log("star x: " + this.star.coordinate.x);
		console.log("star y: " + this.star.coordinate.y);
		console.log("x: " + this.coordinate.x);
		console.log("y: " + this.coordinate.y);
		console.log("xDiff: " + xDiff);
		console.log("yDiff: " + yDiff);
		console.log("vCoordinate x: " + this.vCoordinate.x);
		console.log("vCoordinate y: " + this.vCoordinate.y);
		SpaceObject.prototype.oneStep.call(this);
	}
  return Planet;
}());