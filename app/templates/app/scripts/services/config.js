/*global define, document*/

define(function(require){
  'use strict';

  var services = require('services/services');

  return services.factory( 'config', function(){
    var appDom = document.getElementById('app'),
        appCng,
        json,
        config;

    if (appDom) {
      appCng = appDom.getAttribute('data-config');
    }

    if (appCng) {
      try {
        json = JSON.parse(appCng);
      } catch(e) {
        json = e;
      }
    }

    config = (json) ? json : {};

    return config;
  });

});
