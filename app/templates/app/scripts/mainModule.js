/*global, require*/

(function () {
  'use strict';
  require({
    waitSeconds: 200,
    baseUrl: 'scripts/',
    deps: ['config']
  },[ 'app',
       'bootstrap',
       'controllers/main',
       'directives/main-header',
       'directives/main-page',
       'filters/main-interpolate'], function(app, bootstrap){
    app.config(['$routeProvider', function( $routeProvider ) {
      return $routeProvider
        .when( '/', {
          templateUrl: '/views/controllers/main.htm',
          controller: 'mainController'
        })
        .otherwise({ redirectTo: '/' });
    }]);
  });
}());
