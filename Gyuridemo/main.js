/*globals Simulation*/
var simulation = new Simulation(20);
var renderer = new Renderer(simulation);
var eventhandler = new Eventhandler(simulation);
simulation.setRender(renderer);
simulation.start();