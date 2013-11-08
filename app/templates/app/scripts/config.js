/*global requirejs*/
requirejs.config({
  paths: {
    requireLib: '../bower_components/requirejs/require',
    modernizr: '../bower_components/modernizr/modernizr',
    domReady: '../bower_components/requirejs-domready/domReady',
    angular: '../bower_components/angular/angular',
    showdown: '../bower_components/showdown/compressed/showdown',
    text: '../bower_components/requirejs-text/text',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
    'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
    'angular-resource': '../bower_components/angular-resource/angular-resource',
    jquery: '../bower_components/jquery/jquery',
    json3: '../bower_components/json3/build',
    overthrow: '../bower_components/overthrow/dist/overthrow',
    'requirejs-domready': '../bower_components/requirejs-domready/domReady',
    'requirejs-text': '../bower_components/requirejs-text/text'
  },
  shim : {
    'angular' : {
      exports: 'angular',
    },
    'showdown' : {
      exports: 'Showdown',
    },
    'angular-resource': {
      deps: ['angular']
    },
    'angular-sanitize': {
      deps: ['angular']
    }
  }
});
