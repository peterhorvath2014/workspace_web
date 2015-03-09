window.Eventhandler = (function() {
	"use strict";

	function Eventhandler(simulation) {
		this.simulation = simulation;
		this.init();
		this.lastMissile = 0;
	}

	Eventhandler.prototype.init = function() {
		var eventHandler = this
		document.addEventListener("keydown", function (event) {
			eventHandler.keydown(event);
		}, false);
		
		document.addEventListener("keyup", function (event) {
			eventHandler.keyup(event);
		}, false);
	}

	Eventhandler.prototype.keydown = function(event) {
		var char = String.fromCharCode(event.keyCode || event.charCode);

		if(char === "J" || char === "L") {
			this.simulation.ship.rotation = char;
			this.simulation.ship.enabledrotation = true;
			event.preventDefault();
		}
		else if (char === "I" ) {
			this.simulation.ship.enabledspeedinc = true;
			event.preventDefault();
		}
		else if (char === " " ) {
			if(this.lastMissile < Date.now() - 1000) {
				this.simulation.addMissile(
						new Missile(
								this.simulation.ship.position.shift(
									new Vector(
											this.simulation.ship.speed.x - 7 * Math.sin(this.simulation.ship.rotationPos * Math.PI / 180) , 
											this.simulation.ship.speed.y + 7 * Math.cos(this.simulation.ship.rotationPos * Math.PI / 180)
											)
								), 
								new Vector(
										this.simulation.ship.speed.x - 3 * Math.sin(this.simulation.ship.rotationPos * Math.PI / 180) , 
										this.simulation.ship.speed.y + 3 * Math.cos(this.simulation.ship.rotationPos * Math.PI / 180)
										), 
								this.simulation.star, 
								this.simulation.ship.rotationPos,
								Date.now()));
				this.lastMissile = Date.now();
			}
			event.preventDefault();
		}
	}
	
	Eventhandler.prototype.keyup = function(event) {
		var char = String.fromCharCode(event.keyCode || event.charCode);

		if(char === "J" || char === "L") {
			this.simulation.ship.rotation = char;
			this.simulation.ship.enabledrotation = false;
			event.preventDefault();
		}
		else if (char === "I" ) {
			this.simulation.ship.enabledspeedinc = false;
			event.preventDefault();
		}
	}

	return Eventhandler;
}());