/*global define*/

define(function(require){
  'use strict';

  var directives = require('directives/directives');

  return directives.directive( 'header', [function() {

      function link( scope, elem, attr ) {}

      return {
        templateUrl: '/views/directives/main-header.htm',
        link: link,
        restrict: 'EA',
        replace: true
      };

    }
  ]);

});
