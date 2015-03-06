function SimulationDisplay(simulation) {
	this.simulation = simulation;
	this.simulation.setDisplay(this);
}

SimulationDisplay.prototype.updateScene = function() {
	var planet = document.getElementById("planet");
	var planetModel = this.simulation.planet;
	planet.style.left = planetModel.x + "px";
	planet.style.top = planetModel.y + "px";	
};