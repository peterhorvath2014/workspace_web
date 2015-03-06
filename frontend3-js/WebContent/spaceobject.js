function SpaceObject(x, y, vx, vy, star) {
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.star = star;
	this.G = 500;
};

SpaceObject.prototype.oneStep = function() {
	this.x +=  this.vx;
	this.y +=  this.vy;
	this.updateSpeed();
};

SpaceObject.prototype.distanceFrom = function(other) {
	return Math.sqrt(Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2));
};

SpaceObject.prototype.updateSpeed = function() {
	var distance = this.distanceFrom(this.star);
	var force = this.G / Math.pow(distance, 2);
	this.vx += force * (this.star.x - this.x) / distance;
	this.vy += force * (this.star.y - this.y) / distance;
};