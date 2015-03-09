/*globals GameEngine, Star, Planet, console*/
window.Simulation = (function () {
  "use strict";

  function Simulation(fps) {
    GameEngine.call(this, fps);
    this.star = new Star(new Coordinate(400, 300));
    this.planet = new Planet(new Coordinate(600, 300), new Coordinate(0, 1), this.star);
  }

  Simulation.prototype = new GameEngine();
  Simulation.prototype.constructor = Simulation;

  Simulation.prototype.oneStep = function () {
    this.planet.oneStep();
    this.updateScene();
  };

  Simulation.prototype.updateScene = function () {
    var planetDiv = document.querySelector(".spaceobject");
    planetDiv.style.top = this.planet.coordinate.y + "px";
    planetDiv.style.left = this.planet.coordinate.x + "px";
  };


  return Simulation;
}());