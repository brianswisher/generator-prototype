/*global define*/

define(function(require){
  'use strict';

  var directives = require('directives/directives');

  return directives.directive( 'page', function( $http, $routeParams, $route, readme ) {

      var link = function(scope) {
        scope.copyScriptTag = function(e) {
          window.prompt ('Select all and copy', '<script src="'+e.target.getAttribute('data-url')+'"></script>');
        };
        scope.toggle = function(e) {
          var prop = e.target.getAttribute('data-target');
          scope[prop] = !scope[prop];
        };
        scope.readme = readme;
      };

      return {
        templateUrl: '/views/directives/main-page.htm',
        link: link,
        restrict: 'EA',
        replace: true
      };
    }
  );

});
