function mandelUI() {
	this.mandelbrot = new Mandelbrot(document.getElementById('mandelimage'));
	this.mandelbrot.loadForm(document.getElementById('calcdata'));
	this.mandelbrot.calculate();
}

var mandel = null;
window.onload = function() {
	mandel = new mandelUI();
	mandel.init();	
};
