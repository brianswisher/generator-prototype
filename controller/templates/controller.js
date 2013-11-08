/*global define*/

define(function(require){
  'use strict';

  var controllers = require('controllers/controllers');

  return controllers.controller( '<%= name %>Controller', [
    '$scope', '$location', '$routeParams', function( $scope, $location, $routeParams ) {

      $scope.location = $location;
      $scope.routeParams = $routeParams;

    }
  ]);

});

