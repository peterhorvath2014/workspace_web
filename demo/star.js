/*globals SpaceObject*/
window.Star = (function () {
  "use strict";

  function Star(coordinate) {
    SpaceObject.call(this, coordinate, new Coordinate(0,0));
  }

  Star.prototype = new SpaceObject();
  Star.prototype.constructor = Star;

  return Star;
}());