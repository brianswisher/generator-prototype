/*global define*/

define(function(require){
  'use strict';

  var angular = require('angular'),
      sanitize = require('angular-sanitize'),
      controllers = require('controllers/controllers'),
      directives = require('directives/directives'),
      services = require('services/services'),
      filters = require('filters/filters');

  return angular.module('app', ['controllers', 'directives', 'services', 'filters', 'ngSanitize'])
         .config(['$interpolateProvider', function($interpolateProvider){
            $interpolateProvider.startSymbol('[[');
            $interpolateProvider.endSymbol(']]');
          }]);

});

