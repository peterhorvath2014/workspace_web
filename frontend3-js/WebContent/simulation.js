function Simulation() {
	GameEngine.call(this, 20);//super()
	this.star = new SpaceObject(300, 300, 0, 0, null);
	this.planet = new SpaceObject(600, 300, 0, 1, this.star);
}

Simulation.prototype = new GameEngine();
Simulation.prototype.constructor = Simulation;
	
Simulation.prototype.setDisplay = function(simulationDisplay) {
	this.display = simulationDisplay;
};

Simulation.prototype.run = function() {
	this.planet.oneStep();
	if (this.display) {
		this.display.updateScene();
	}
};

var simulation = new Simulation();
var display = new SimulationDisplay(simulation);
simulation.start();