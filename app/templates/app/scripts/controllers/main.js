/*global define, document, window, console*/

define(function(require){
  'use strict';

  var controllers = require('controllers/controllers'),
      config = require('services/config'),
      host = require('services/host'),
      readme = require('services/readme'),
      modernizr = require('modernizr');

  return controllers.controller( 'mainController', [
    '$scope', '$location', '$routeParams', 'config', 'host', function( $scope, $location, $routeParams, config, host ) {

      $scope.location = $location;
      $scope.routeParams = $routeParams;
      $scope.config = config;

    }
  ]);

});
