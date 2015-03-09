/*globals SpaceObject*/
window.Planet = (function () {
  "use strict";

  function Planet(position, speed, star) {
    SpaceObject.call(this, position, speed);
    this.star = star;
  }
  
  Planet.prototype = new SpaceObject();
  Planet.prototype.constructor = Planet;

  return Planet;
}());