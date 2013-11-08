'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var ControllerGenerator = module.exports = function ControllerGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(ControllerGenerator, yeoman.generators.NamedBase);

ControllerGenerator.prototype.files = function files() {
  this.template('controller.js', 'app/scripts/controllers/' + this.name + '.js');
  this.template('controllerSpec.js', 'test/controllers/' + this.name + 'Spec.js');
  if (this.options.template) {
    this.template('controller.htm', 'app/views/controllers/' + this.name + '.htm');
  }
};
