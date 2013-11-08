/*global module, define, describe, beforeEach, inject, it, expect, afterEach*/
(function () {
  "use strict";
  define(function(require){

  var angular = require('angular'),
      directives = require('directives/directives'),
      <%= name %> = require('directives/<%= name %>'),<% if (options['skip-template'] === undefined) { %>
      <%= name %>Tmpl = require('text!../../app/views/directives/<%= name %>.htm'),<% } %>
      angularSanitize = require('angular-sanitize'),
      angularMocks = require('angular-mocks');

  describe('Directive: <%= name %>', function () {

      beforeEach(module('directives'));
      directives.directive('<%= name.toLowerCase() %>', <%= name %>.value);

      var elem;

      beforeEach(inject(function ($rootScope, $compile, $templateCache) {
        $templateCache.put('/views/directives/<%= name %>.htm', <% if (options['skip-template'] === undefined) { %><%= name %>Tmpl<% } else { %>'<div class="<%= name %>"></div>'<% } %>);
        elem = $compile('<div <%= name.toLowerCase() %>></div>')($rootScope);
        $rootScope.$apply();
        $rootScope.$digest();
      }));

      afterEach(function () {
          elem = null;
      });

      it('Should have "toggle" property', function () {
        expect(elem.scope().hasOwnProperty("toggle")).toBe(true);
      });

    });

  });
}());



