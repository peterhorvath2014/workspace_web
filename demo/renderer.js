window.Renderer = (function () {
	"use strict";
	
	function Renderer(simulation) {
	    this.simulation = simulation;
	  }
	
	Renderer.prototype.updateScene = function() {
		this.simulation.planets.forEach(function(planet) {
			var planetDiv = document.getElementById(planet.name);
			planetDiv.style.top = planet.coordinate.y + "px";
			planetDiv.style.left = planet.coordinate.x + "px";
		});
		
		var starDiv = document.getElementById(this.simulation.star.name);
		starDiv.style.top = this.simulation.star.coordinate.y + "px";
		starDiv.style.left = this.simulation.star.coordinate.x + "px";
		
		var spaceShipDiv = document.getElementById(this.simulation.spaceShip.name);
		spaceShipDiv.style.top = this.simulation.spaceShip.coordinate.y + "px";
		spaceShipDiv.style.left = this.simulation.spaceShip.coordinate.x + "px";
	};
	
	Renderer.prototype.setUpScene = function() {
		this.createStar();
		this.createPlanets();
		this.createSpaceShip();
	};

	Renderer.prototype.createPlanets = function() {
		this.simulation.planets.forEach(function(planet) {
			this.createPlanetDiv(planet);
		}, this);
	}

	Renderer.prototype.createStar = function() {
		this.createPlanetDiv(this.simulation.star);
	}
	
	Renderer.prototype.createSpaceShip = function() {
		this.createPlanetDiv(this.simulation.spaceShip);
	}

	Renderer.prototype.createPlanetDiv = function(planet) {
		var divPlanet = document.createElement("div");
		divPlanet.id = planet.name;
		divPlanet.innerHTML = '<img src="' + planet.image
				+ '" width ="30" height="30">';
		divPlanet.className += planet.className;
		var gameAreaDiv = document.querySelector(".gamearea");
		gameAreaDiv.appendChild(divPlanet);
	}
	
	return Renderer;
}())