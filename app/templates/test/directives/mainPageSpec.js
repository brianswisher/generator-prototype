/*global module, define, describe, beforeEach, inject, it, expect, afterEach*/
(function () {
  "use strict";
  define(function(require){

  var angular = require('angular'),
      directives = require('directives/directives'),
      page = require('directives/main-page'),
      filters = require('filters/filters'),
      interpolate = require('filters/main-interpolate'),
      services = require('services/services'),
      hostSrv = require('services/host'),
      readmeSrv = require('services/readme'),
      configSrv = require('services/config'),
      mainPageTmpl = require('text!../../app/views/directives/main-page.htm'),
      angularSanitize = require('angular-sanitize'),
      angularMocks = require('angular-mocks');

  describe('Main Page Directive', function () {

      beforeEach(module('directives', 'filters', 'services'));
      directives.directive('page', page.value);
      filters.filter('interpolate', interpolate.value);
      services.factory('host', hostSrv.value);
      services.factory('readme', readmeSrv.value);
      services.factory('config', configSrv.value);

      var elem, filter;

      beforeEach(inject(function ($rootScope, $compile, $templateCache, $filter, host, readme, config) {
        filter = $filter;
        $templateCache.put('/views/directives/main-page.htm', mainPageTmpl);
        elem = $compile('<div page></div>')($rootScope);
        $rootScope.$apply();
        $rootScope.$digest();
      }));

      afterEach(function () {
          elem = null;
      });

      it('Should have an interpolate filter', function () {
        expect(filter('interpolate')).not.toBeNull();
      });

      it('Should have a host service', inject(function(host){
        expect(host).not.toBeNull();
      }));

      it('Should have a readme service', inject(function(readme){
        expect(readme).not.toBeNull();
      }));

      it('Should have a config service', inject(function(config){
        expect(config).not.toBeNull();
      }));

      it('Should have "toggle" property', function () {
        expect(elem.scope().hasOwnProperty("toggle")).toBe(true);
      });

      it('Should have "copyScriptTag" property', function () {
        expect(elem.scope().hasOwnProperty("copyScriptTag")).toBe(true);
      });

      it ('Should indicate how many servers the Host is running', function() {
        expect(elem.find('h4')[0].innerHTML).toMatch(/^\[\[\s'Host:\s%HOST%\srunning\s%SERVERS_LENGTH%\sservers'\s|\sinterpolate\s\]\]/);
      });

      it ('Should say that client files are being watched', function() {
        expect(elem.find('h3')[0].innerHTML).toContain('watching client files');
      });

    });

  });
}());

