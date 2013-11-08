'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var PrototypeGenerator = module.exports = function PrototypeGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(PrototypeGenerator, yeoman.generators.Base);

PrototypeGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'clientFilesDirectory',
    message: 'What is the relative path to your client files directory?',
    default: 'static'
  }];

  this.prompt(prompts, function (props) {
    // `props` is an object passed in containing the response values, named in
    // accordance with the `name` property from your prompt object. So, for us:
    this.clientFilesDirectory = props.clientFilesDirectory;

    cb();
  }.bind(this));
};

PrototypeGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/images');
  this.mkdir('app/scripts/controllers');
  this.mkdir('app/scripts/directives');
  this.mkdir('app/scripts/filters');
  this.mkdir('app/scripts/services');
  this.mkdir('app/server/routes');
  this.mkdir('app/styles');
  this.mkdir('app/views/controllers');
  this.mkdir('app/views/directives');
  this.mkdir('test/controllers');
  this.mkdir('test/directives');
};

PrototypeGenerator.prototype.projectfiles = function projectfiles() {

  //app
  this.copy('app/buildignore', 'app/.buildignore');
  this.copy('app/htaccess', 'app/.htaccess');
  this.copy('app/404.html', 'app/404.html');
  this.copy('app/favicon.ico', 'app/favicon.ico');
  this.copy('app/index.html', 'app/index.html');
  this.copy('app/robots.txt', 'app/robots.txt');
  this.copy('app/README.md', 'app/README.md');

  this.copy('app/images/glyphicons-halflings.png', 'app/images/glyphicons-halflings.png');
  this.copy('app/images/glyphicons-halflings-white.png', 'app/images/glyphicons-halflings-white.png');

  this.copy('app/scripts/tdd.js', 'app/scripts/tdd.js');
  this.copy('app/scripts/app.js', 'app/scripts/app.js');
  this.copy('app/scripts/bootstrap.js', 'app/scripts/bootstrap.js');
  this.copy('app/scripts/config.js', 'app/scripts/config.js');
  this.copy('app/scripts/mainModule.js', 'app/scripts/mainModule.js');

  this.copy('app/scripts/services/config.js', 'app/scripts/services/config.js');
  this.copy('app/scripts/services/host.js', 'app/scripts/services/host.js');
  this.copy('app/scripts/services/readme.js', 'app/scripts/services/readme.js');
  this.copy('app/scripts/services/services.js', 'app/scripts/services/services.js');

  this.copy('app/scripts/filters/filters.js', 'app/scripts/filters/filters.js');
  this.copy('app/scripts/filters/main-interpolate.js', 'app/scripts/filters/main-interpolate.js');

  this.copy('app/scripts/directives/directives.js', 'app/scripts/directives/directives.js');
  this.copy('app/scripts/directives/main-header.js', 'app/scripts/directives/main-header.js');
  this.copy('app/scripts/directives/main-page.js', 'app/scripts/directives/main-page.js');

  this.copy('app/scripts/controllers/controllers.js', 'app/scripts/controllers/controllers.js');
  this.copy('app/scripts/controllers/main.js', 'app/scripts/controllers/main.js');

  this.copy('app/styles/main.scss', 'app/styles/main.scss');

  this.copy('app/server/routes/index.js', 'app/server/routes/index.js');
  this.copy('app/server/routes/main-prototypes.json', 'app/server/routes/main-prototypes.json');
  this.copy('app/server/config.json', 'app/server/config.json');
  this.copy('app/server/server.js', 'app/server/server.js');

  this.copy('app/views/main.html', 'app/views/main.html');
  this.copy('app/views/temp.html', 'app/views/temp.html');
  this.copy('app/views/controllers/main.htm', 'app/views/controllers/main.htm');
  this.copy('app/views/directives/main-header.htm', 'app/views/directives/main-header.htm');
  this.copy('app/views/directives/main-page.htm', 'app/views/directives/main-page.htm');

  //test
  this.copy('test/main.js', 'test/main.js');
  this.copy('test/controllers/mainSpec.js', 'test/controllers/mainSpec.js');
  this.copy('test/directives/mainPageSpec.js', 'test/directives/mainPageSpec.js');
};

PrototypeGenerator.prototype.runtime = function runtime() {
  this.template('Gruntfile.js', 'Gruntfile.js');
  this.copy('karma.conf.js', 'karma.conf.js');
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('editorconfig', '.editorconfig');
  this.copy('gitattributes', '.gitattributes');
  this.copy('jshintrc', '.jshintrc');
  this.copy('travis.yml', '.travis.yml');
  this.copy('app/README.md', 'README.md');
  this.copy('bowerrc', '.bowerrc');
  this.copy('gitignore', '.gitignore');
};
