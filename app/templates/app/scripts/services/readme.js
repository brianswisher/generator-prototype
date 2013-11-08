/*global define, Showdown*/

define(function(require){
  'use strict';

  var services = require('services/services'),
      readme = require('text!../../README.md'),
      showdown = require('showdown');

  return services.factory( 'readme', function(){
    var converter = new showdown.converter(),
        htm = converter.makeHtml(readme);
    return htm;
  });

});
