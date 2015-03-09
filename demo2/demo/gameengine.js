/*globals GameEngine, console*/
window.GameEngine = (function () {
  "use strict";

  function GameEngine(fps) {
    this.fps = fps || 20;
    this.renderer = null;
  }

  GameEngine.prototype.setRenderer = function (renderer) {
    this.renderer = renderer;
    this.renderer.setUpScene();
  };

  GameEngine.prototype.start = function () {
    var gameEngine = this;
    setInterval(function () {
      gameEngine.oneStep();
    }, 1000 / this.fps);
  };

  GameEngine.prototype.oneStep = function () {
    if (this.renderer) {
      this.renderer.updateScene();
    }
  };

  return GameEngine;
}());