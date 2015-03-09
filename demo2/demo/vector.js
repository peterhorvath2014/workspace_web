window.Vector = (function () {
  "use strict";

  function Vector(x, y) {
    this.x = x;
    this.y = y;
  }

  Vector.prototype.add = function (another) {
    this.x += another.x;
    this.y += another.y;
  };

  Vector.prototype.distanceFrom = function (another) {
    var xDiff = another.x - this.x,
      yDiff = another.y - this.y;
    return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
  };

  return Vector;
}());