'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var FilterGenerator = module.exports = function FilterGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(FilterGenerator, yeoman.generators.NamedBase);

FilterGenerator.prototype.files = function files() {
  this.template('filter.js', 'app/scripts/filters/' + this.name + '.js');
};
