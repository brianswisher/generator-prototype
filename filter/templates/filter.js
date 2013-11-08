/*global define*/

define(function(require){
  'use strict';

  var filters = require('filters/filters');

  return filters.filter( '<%= name %>', function(){
    return function(text) {
      text = String(text).replace(/\%<%= name.toUpperCase() %>\%/mg, '<%= name %>'.split('').reverse().join(''));
      return text;
    };
  });

});
