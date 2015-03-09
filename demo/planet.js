/*globals SpaceObject*/
window.Planet = (function () {
  "use strict";

  function Planet(coordinate, vCoordinate, star) {
    SpaceObject.call(this, coordinate, vCoordinate);
    this.star = star;
  }
  Planet.prototype = new SpaceObject();
  Planet.prototype.constructor = Planet;

  return Planet;
}());