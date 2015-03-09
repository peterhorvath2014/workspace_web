window.SpaceObject = (function () {
  "use strict";

  function SpaceObject(coordinate, vCoordinate) {
    this.coordinate = coordinate;
    this.vCoordinate = vCoordinate;
  }

  SpaceObject.prototype.oneStep = function () {
    this.coordinate.x += this.vCoordinate.x;
    this.coordinate.y += this.vCoordinate.y;
  };

  return SpaceObject;
}());