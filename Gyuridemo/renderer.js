window.Renderer = (function() {
	"use strict";
	
	function Renderer(simulation) {
		this.simulation = simulation;
	}

	Renderer.prototype.updateScene = function() {
		var renderer = this;
		
		var starDiv = document.getElementById(this.simulation.star.id);
		starDiv.style.top =  this.simulation.star.getY() + "px";
		starDiv.style.left = this.simulation.star.getX() + "px";
		
		var shipDiv = document.getElementById(this.simulation.ship.id);
		shipDiv.style.top =  this.simulation.ship.getY() + "px";
		shipDiv.style.left = this.simulation.ship.getX() + "px";
		shipDiv.style.transform = "rotate(" + this.simulation.ship.rotationPos + "deg)";
		
		this.simulation.planets.forEach(function(planet) {
			var planetDiv = document.getElementById(planet.id);
			planetDiv.style.top =  planet.getY() + "px";
			planetDiv.style.left = planet.getX() + "px";			
		});
		
		this.simulation.missiles.forEach(function(missile) {
			var missileDiv = document.getElementById(missile.id);
			missileDiv.style.top =  missile.getY() + "px";
			missileDiv.style.left = missile.getX() + "px";
			missileDiv.style.transform = "rotate(" + missile.rotationPos + "deg)";
		});
	};

	Renderer.prototype.setUpScene = function () {
		this.simulation.planets.forEach(function (planet) {
			this.createPlanetDiv(planet);
		}, this);
		
		this.createSunDiv(this.simulation.star)
		this.createShipDiv(this.simulation.ship)
	}
	
	Renderer.prototype.createPlanetDiv = function(planet) {
		var div = document.createElement("div");
		var img = document.createElement("img");
		img.setAttribute("src", "planet.svg");
		img.setAttribute("width", "30");
		img.setAttribute("height", "30");
		div.appendChild(img);
		div.className += "spaceobject";
		div.id = planet.id;
		
		div.style.marginTop = - 30 / 2 + "px";
		div.style.marginLeft = - 30 / 2  + "px";
		
		document.querySelector(".gamearea").appendChild(div);
	}
	
	Renderer.prototype.createSunDiv = function(star) {
		var div = document.createElement("div");
		var img = document.createElement("img");
		img.setAttribute("src", "sun.png");
		img.setAttribute("width", "64");
		img.setAttribute("height", "64");
		div.appendChild(img);
		div.className += "spaceobject";
		div.id = star.id;
		
		div.style.marginTop = - 64 / 2 + "px";
		div.style.marginLeft = - 64 / 2  + "px";
		
		document.querySelector(".gamearea").appendChild(div);
	}
	
	Renderer.prototype.createShipDiv = function(ship) {
		var div = document.createElement("div");
		var img = document.createElement("img");
		img.setAttribute("src", "ship.png");
		img.setAttribute("width", "30");
		img.setAttribute("height", "30");
		div.appendChild(img);
		div.className += "spaceobject";
		div.id = ship.id;
		
		div.style.marginTop = - 30 / 2 + "px";
		div.style.marginLeft = - 30 / 2  + "px";
		
		document.querySelector(".gamearea").appendChild(div);
	}
	
	Renderer.prototype.createMissileDiv = function(missile) {
		var div = document.createElement("div");
		var img = document.createElement("img");
		img.setAttribute("src", "missile.png");
		img.setAttribute("width", "10");
		img.setAttribute("height", "10");
		div.appendChild(img);
		div.className += "spaceobject";
		div.id = missile.id;
		
		div.style.marginTop = - 10 / 2 + "px";
		div.style.marginLeft = - 10 / 2  + "px";
		
		document.querySelector(".gamearea").appendChild(div);
	}
	
	Renderer.prototype.removeObjectDiv = function(object) {
		var missileDiv = document.getElementById(object.id);
		missileDiv.parentNode.removeChild(missileDiv);
	}
	
	return Renderer;
}());