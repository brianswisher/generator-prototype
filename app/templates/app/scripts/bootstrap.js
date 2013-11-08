/*global define*/

define(function(require){
  'use strict';

  var angular = require('angular'),
      app = require('app');

  return require(['domReady!'], function(document) {
    return angular.bootstrap(document, ['app']);
  });

});
