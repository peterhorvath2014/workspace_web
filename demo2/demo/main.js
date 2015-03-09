/*globals Simulation*/
var simulation = new Simulation(20);
var renderer = new Renderer(simulation);
simulation.setRenderer(renderer);

simulation.start();