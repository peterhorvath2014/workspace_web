window.SpaceObject = (function () {
  "use strict";

  function SpaceObject(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }

  SpaceObject.prototype.oneStep = function () {
    this.x += this.vx;
    this.y += this.vy;
  };

  return SpaceObject;
}());