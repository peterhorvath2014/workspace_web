/*globals GameEngine, console*/
window.GameEngine = (function () {
  "use strict";

  function GameEngine(fps) {
    this.fps = fps || 20;
  }

  GameEngine.prototype.start = function () {
    var gameEngine = this;
    setInterval(function () {
      gameEngine.oneStep();
    }, 1000 / this.fps);
  };

  GameEngine.prototype.oneStep = function () {
    console.log("GameEngine.oneStep");
  };

  return GameEngine;
}());
