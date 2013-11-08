/*global define*/

define(function(require){
  'use strict';

  var directives = require('directives/directives');

  return directives.directive( '<%= name.toLowerCase() %>', function( $http, $routeParams, $route ) {

      var link = function(scope) {
        scope.toggle = function(e) {
          var prop = e.target.getAttribute('data-target');
          scope[prop] = !scope[prop];
        };
      };

      return {
        templateUrl: '/views/directives/<%= name %>.htm',
        link: link,
        restrict: 'EA',
        replace: true
      };
    }
  );

});
