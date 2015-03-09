/*globals Vector, SpaceObject*/
window.Star = (function () {
  "use strict";

  function Star(pos) {
    SpaceObject.call(this, pos, new Vector(0, 0));
  }

  Star.prototype = new SpaceObject();
  Star.prototype.constructor = Star;

  return Star;
}());