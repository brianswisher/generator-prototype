'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var DirectiveGenerator = module.exports = function DirectiveGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(DirectiveGenerator, yeoman.generators.NamedBase);

DirectiveGenerator.prototype.files = function files() {
  this.template('directive.js', 'app/scripts/directives/' + this.name + '.js');
  this.template('directiveSpec.js', 'test/directives/' + this.name + 'Spec.js');
  if (!this.options['skip-template']) {
    this.template('directive.htm', 'app/views/directives/' + this.name + '.htm');
  }
};
