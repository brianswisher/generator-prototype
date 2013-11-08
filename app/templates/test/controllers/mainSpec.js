/*global module, define, describe, beforeEach, inject, it, expect*/

(function () {
  "use strict";
  define(function(require){

  var angular = require('angular-mocks'),
      app = require('app'),
      main = require('controllers/main');

  describe('Controller: mainController', function () {

      // load the controller's module
      beforeEach(angular.module('app'));

      var mainController, scope;

      // Initialize the controller and a mock scope
      beforeEach(
          inject(function ($rootScope, $controller) {
          scope = $rootScope.$new();
          mainController = $controller('mainController', { $scope:scope });
      }));

      it('Should have "location" property', function () {
        expect(scope.hasOwnProperty("location")).toEqual(true);
      });

      it('Should have "config" property', function () {
        expect(scope.hasOwnProperty("config")).toEqual(true);
      });

      it('Should have "routeParams" property', function () {
        expect(scope.hasOwnProperty("routeParams")).toEqual(true);
      });

  });

  });
}());
