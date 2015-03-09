/*globals SpaceObject*/
window.Star = (function () {
  "use strict";

  function Star(x, y) {
    SpaceObject.call(this, x, y, 0, 0);
  }

  Star.prototype = new SpaceObject();
  Star.prototype.constructor = Star;

  return Star;
}());