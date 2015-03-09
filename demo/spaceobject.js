window.SpaceObject = (function () {
  "use strict";

  function SpaceObject(coordinate, vCoordinate, image) {
    this.coordinate = coordinate;
    this.vCoordinate = vCoordinate;
    this.name = "planet" + Math.floor(Math.random() * 1000000);
    this.image = image || "defaultimage.png"; 
  }

  SpaceObject.prototype.oneStep = function () {
    this.coordinate.add(this.vCoordinate);
  };
  
  return SpaceObject;
}());