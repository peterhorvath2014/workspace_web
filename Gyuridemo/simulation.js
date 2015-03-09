/*globals GameEngine, Star, Planet, console*/
window.Simulation = (function() {
	"use strict";

	function Simulation(fps) {
		GameEngine.call(this, fps);
		this.setUpModel();
		this.renderer = null;
		this.gameover = false;
	}

	Simulation.prototype = new GameEngine();
	Simulation.prototype.constructor = Simulation;

	Simulation.prototype.setRender = function(renderer) {
		this.renderer = renderer;
		this.renderer.setUpScene();
	}
	
	Simulation.prototype.oneStep = function() {
		if(!this.gameover) {
			this.planets.forEach(function (planet) {
				planet.oneStep()
			});
			
			var simulation = this;
			this.missiles.forEach(function (missile) {
				missile.oneStep()
				if(missile.created < Date.now() - 30000) {
					simulation.destroyMissile(missile);
				}
			});
			
			this.ship.oneStep();
			
			if(this.renderer) {
				this.renderer.updateScene();
			}
			
			this.detectCollusion();
		}
	};
	
	Simulation.prototype.detectCollusion = function() {
		var simulation = this;
		this.planets.forEach(function (planet) {
			if(planet.position.distance(simulation.ship.position) < 10) {
				simulation.gameover = true;
			}
			
			simulation.missiles.forEach(function (missile) {
				if(planet.position.distance(missile.position) < 10) {
					simulation.destroyMissile(missile);
					simulation.destroyPlanet(planet);
				}
			});
		});
		
		this.missiles.forEach(function (missile) {
			if(missile.position.distance(simulation.ship.position) < 5) {
				simulation.gameover = true;
			}
			
			if(missile.position.distance(simulation.star.position) < 10) {
				simulation.destroyMissile(missile);
			}
		});
		
		if(this.star.position.distance(this.ship.position) < 28) {
			simulation.gameover = true;
		}
	}

	Simulation.prototype.setUpModel = function () {
		this.star = new Star(new Vector(400, 300));
		
		this.ship = new Ship(new Vector(250, 250), new Vector(0, 1.5), this.star, "J");
		
		this.planets = [
		                new Planet(new Vector(600, 300), new Vector(0, 1), this.star),
		                new Planet(new Vector(200, 200), new Vector(0, -1), this.star)
		                ];
		
		this.missiles = [];
		
		
	}
	
	Simulation.prototype.addMissile = function(missile) {
		simulation.renderer.createMissileDiv(missile);
		this.missiles.push(missile);
	}
	
	Simulation.prototype.destroyMissile = function(missile) {
		var index = this.missiles.indexOf(missile);
		if (index > -1) {
			this.missiles.splice(index, 1);
			simulation.renderer.removeObjectDiv(missile);
		}
	}
	
	Simulation.prototype.destroyPlanet = function(planet) {
		var index = this.planets.indexOf(planet);
		if (index > -1) {
			this.planets.splice(index, 1);
			simulation.renderer.removeObjectDiv(planet);
		}
	}
	
	return Simulation;
}());