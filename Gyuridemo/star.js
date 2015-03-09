/*globals SpaceObject*/
window.Star = (function () {
  "use strict";

  function Star(position) {
    SpaceObject.call(this, position, new Vector(0, 0));
  }

  Star.prototype = new SpaceObject();
  Star.prototype.constructor = Star;

  return Star;
}());