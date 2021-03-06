/*global define, document*/

define(function(require){
  'use strict';

  var services = require('services/services');

  return services.factory( 'host', function(){
    return document.location.href.split('//').pop().split(':').shift();
  });

});
