/*global module, define, describe, beforeEach, inject, it, expect*/

(function () {
  "use strict";
  define(function(require){

  var angular = require('angular-mocks'),
      app = require('app'),
      <%= name %> = require('controllers/<%= name %>');

  describe('Controller: <%= name %>', function () {

      // load the controller's module
      beforeEach(angular.module('app'));

      var <%= name %>Controller, scope;

      // Initialize the controller and a mock scope
      beforeEach(
          inject(function ($rootScope, $controller) {
          scope = $rootScope.$new();
          <%= name %>Controller = $controller('<%= name %>Controller', { $scope:scope });
      }));

      it('Should have "location" property', function () {
        expect(scope.hasOwnProperty("location")).toEqual(true);
      });

      it('Should have "routeParams" property', function () {
        expect(scope.hasOwnProperty("routeParams")).toEqual(true);
      });

  });

  });
}());
