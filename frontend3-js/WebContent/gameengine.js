function GameEngine(fps) {
	this.fps = fps || 20;	
}

GameEngine.prototype.start = function() {
	var engine = this;
	function tick() {
		engine.run();
	}
	setInterval(tick, 1000 / this.fps);
};

GameEngine.prototype.run = function() {
	console.log('Default game engine.');
};