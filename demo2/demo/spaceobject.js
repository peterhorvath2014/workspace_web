/*globals Vector*/
window.SpaceObject = (function () {
  "use strict";

  var G = 500;

  function SpaceObject(pos, v, star) {
    this.pos = pos;
    this.v = v;
    this.star = star;
    this.id = SpaceObject.prototype.nextId;
    SpaceObject.prototype.nextId += 1;
  }

  SpaceObject.prototype.nextId = 0;

  SpaceObject.prototype.oneStep = function () {
    var force = this.calculateGForce(this.star),
      distance = this.pos.distanceFrom(this.star.pos);
    this.pos.add(this.v);
    this.v.x += force * (this.star.pos.x - this.pos.x) / distance;
    this.v.y += force * (this.star.pos.y - this.pos.y) / distance;
  };

  SpaceObject.prototype.calculateGForce = function (another) {
    return G / Math.pow(this.pos.distanceFrom(another.pos), 2);
  };

  return SpaceObject;
}());