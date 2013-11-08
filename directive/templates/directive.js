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
        <% if (options['skip-template'] === undefined) { %>templateUrl: '/views/directives/<%= name %>.htm',<% } else { %>template: '<div class="<%= name %>"></div>',<% } %>
        link: link,
        restrict: 'EA',
        replace: true
      };
    }
  );

});
