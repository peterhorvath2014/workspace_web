window.Simulation = (function () {
	"use strict";
	function Simulation(fps) {
		GameEngine.call(this, fps);
	}
	
	Simulation.prototype = new GameEngine();
	Simulation.prototype.constructor = Simulation();
	
	Simulation.prototype.oneStep = function () {
		console.log("Sim one step");
	};
	
	return Simulation;
}());
