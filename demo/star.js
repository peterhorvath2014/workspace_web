/*globals SpaceObject*/
window.Star = (function () {
  "use strict";

  function Star(coordinate, image) {
    SpaceObject.call(this, coordinate, new Vector(0,0), image);
    this.className = " star";
  }

  Star.prototype = new SpaceObject();
  Star.prototype.constructor = Star;

  return Star;
}());