/*globals SpaceObject*/
window.Planet = (function () {
  "use strict";

  function Planet(x, y, vx, vy, star) {
    SpaceObject.call(this, x, y, vx, vy);
    this.star = star;
  }
  Planet.prototype = new SpaceObject();
  Planet.prototype.constructor = Planet;

  return Planet;
}());