/*globals GameEngine, Star, Planet, console*/
window.Simulation = (function() {
	"use strict";

	function Simulation(fps) {
		GameEngine.call(this, fps);
		this.setUpModel();
		this.setUpKeyEvents();
	}

	Simulation.prototype = new GameEngine();
	Simulation.prototype.constructor = Simulation;

	Simulation.prototype.oneStep = function() {
		GameEngine.prototype.oneStep.call(this);
		this.planets.forEach(function(planet) {
			planet.oneStep();
		});
		this.spaceShip.oneStep();
	};

	Simulation.prototype.setUpModel = function() {
		this.star = new Star(new Vector(400, 300), "sun.svg");
		this.planets = [
				new Planet(new Vector(700, 350), new Vector(0, 1),
						"jupiter.png", this.star),
				new Planet(new Vector(650, 300), new Vector(0, 1), "mars.png",
						this.star) ];
		this.spaceShip = new SpaceShip(new Vector(600, 350), new Vector(0, 1),
				"spaceship.svg", this.star);
	}

	Simulation.prototype.setUpKeyEvents = function() {
		var thisLocal = this;
		document.addEventListener("keydown", function(e) {
			thisLocal.keyDownTextField(e);
		});
	}

	Simulation.prototype.keyDownTextField = function(e) {
		var keyCode = e.keyCode;
		if (keyCode == 73) {
			this.spaceShip.speedUp();
		} else if (keyCode == 74) {
			this.spaceShip.goLeft();
		} else if (keyCode == 76) {
			this.spaceShip.goRight();
		}
	};
	return Simulation;
}());
