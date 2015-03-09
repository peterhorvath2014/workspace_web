/*globals Vector, GameEngine, Star, Planet, console*/
window.Simulation = (function () {
  "use strict";

  function Simulation(fps) {
    GameEngine.call(this, fps);
    this.setUpModel();
  }

  Simulation.prototype = new GameEngine();
  Simulation.prototype.constructor = Simulation;

  Simulation.prototype.oneStep = function () {
    GameEngine.prototype.oneStep.call(this);
    this.planets.forEach(function (planet) {
      planet.oneStep();
    });
  };

  Simulation.prototype.setUpModel = function () {
    this.star = new Star(new Vector(400, 300));
    this.planets = [
      new Planet(new Vector(600, 300), new Vector(0, 1), this.star),
      new Planet(new Vector(100, 300), new Vector(0, -1), this.star)
    ];
    this.spaceShips = [new SpaceShip()];
  };

  return Simulation;
}());