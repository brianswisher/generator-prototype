/*global requirejs*/

var tests = [];
for (var file in window.__karma__.files) {
  window.__karma__.files[file.replace(/^\//, '')] = window.__karma__.files[file];
  if (window.__karma__.files.hasOwnProperty(file)) {
    if(/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({

  baseUrl: '/base/app/scripts',

  deps: ['config'].concat(tests),

  paths: {
    angular: '../bower_components/angular/angular',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
    'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    text: '../bower_components/requirejs-text/text'
  },
  shim : {
    'angular' : {
      exports: 'angular',
    },
    'angular-resource': {
      deps: ['angular']
    },
    'angular-mocks' : {
      deps: ['angular', 'angular-resource'],
      exports: 'angular.mock'
    },
    'angular-sanitize': {
      deps: ['angular']
    }
  },

  callback: function() {
    setTimeout(function(){
      window.__karma__.start();
    },1000);
  }

});
