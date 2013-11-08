/*global define, document, AnalyticsSupport, $*/

define(function(require){
  'use strict';

  var filters = require('filters/filters');

  return filters.filter( 'interpolate', function(host, config){
    return function(text) {
      text = String(text).replace(/\%HOST\%/mg, host);
      text = String(text).replace(/\%SERVERS_LENGTH\%/mg, config.servers.length);
      return text;
    };
  });

});
