/*globals GameEngine, Star, Planet, console*/
window.Simulation = (function() {
	"use strict";

	function Simulation(fps) {
		GameEngine.call(this, fps);
		this.setupScene();
	}

	Simulation.prototype = new GameEngine();
	Simulation.prototype.constructor = Simulation;

	Simulation.prototype.oneStep = function() {
		this.planets.forEach(function(planet) {
			planet.oneStep();
		});
		this.updateScene();
	};

	Simulation.prototype.updateScene = function() {
		this.planets.forEach(function(planet) {
			planet.oneStep();
			var planetDiv = document.getElementById(planet.name);
			planetDiv.style.top = planet.coordinate.y + "px";
			planetDiv.style.left = planet.coordinate.x + "px";
		});
	};

	Simulation.prototype.setupScene = function setupScene() {
		this.createStar();
		this.createPlanets();
	};

	Simulation.prototype.createPlanets = function() {
		this.planets = [
				new Planet(new Vector(600, 300), new Vector(0, 1), this.star,
						"jupiter.png"),
				new Planet(new Vector(500, 350), new Vector(0, 1), this.star,
						"mars.png") ];
		this.planets.forEach(function(planet) {
			this.createPlanetDiv(planet);
		}, this);
	}

	Simulation.prototype.createStar = function() {
		this.star = new Star(new Vector(400, 300), "sun.svg");
		this.createPlanetDiv(this.star);
		var starDiv = document.querySelector(".star");
		starDiv.style.top = this.star.coordinate.y + "px";
		starDiv.style.left = this.star.coordinate.x + "px";
	}

	Simulation.prototype.createPlanetDiv = function(planet) {
		var divPlanet = document.createElement("div");
		divPlanet.id = planet.name;
		divPlanet.innerHTML = '<img src="' + planet.image
				+ '" width ="30" height="30">';
		divPlanet.className += planet.className;
		var gameAreaDiv = document.querySelector(".gamearea");
		gameAreaDiv.appendChild(divPlanet);
	}

	return Simulation;
}());