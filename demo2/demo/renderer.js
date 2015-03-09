window.Renderer = (function () {
  "use strict";

  function Renderer(simulation) {
    this.simulation = simulation;
  }

  Renderer.prototype.updateScene = function () {
    this.simulation.planets.forEach(function (planet) {
      var planetDiv = document.getElementById("SO" + planet.id);
      planetDiv.style.top = planet.pos.y + "px";
      planetDiv.style.left = planet.pos.x + "px";
    });
  };

  Renderer.prototype.setUpScene = function () {
    this.simulation.planets.forEach(function (planet) {
      this.createPlanetDiv(planet);
    }, this);
    this.createStarDiv();
  };

  Renderer.prototype.createPlanetDiv = function (planet) {
    var div = document.createElement("div");
    div.id = "SO" + planet.id;
    div.innerHTML = "<img src=\"IBM_Smarter_Planet.svg\" width=\"50\">";
    div.className += " spaceobject";
    document.querySelector(".gamearea").appendChild(div);
  };

  Renderer.prototype.createStarDiv = function () {
    var div = document.createElement("div");
    div.innerHTML = "<img src=\"sun_strong_bold.svg\" width=\"50\">";
    div.className += " spaceobject";
    div.style.top = this.simulation.star.pos.y + "px";
    div.style.left = this.simulation.star.pos.x + "px";
    document.querySelector(".gamearea").appendChild(div);
  };

  return Renderer;
}());