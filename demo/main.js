/*globals Simulation*/
var simulation = new Simulation(1000);
var renderer = new Renderer(simulation);
simulation.setRenderer(renderer);
simulation.start();