/*global require, __dirname, exports*/
(function () {
  "use strict";
  var path = require('path'),
      config = require(path.join(__dirname, '..', 'config.json'));

  exports.main = function(req, res){
    res.render('main', {
      prototypes : JSON.stringify(require('./main-prototypes.json')),
      servers : JSON.stringify([
        {
          "id":config.http,
          "name":"http",
          "link":true
        },
        {
          "id":config.weinre,
          "name":"weinre",
          "link":true
        },
        {
          "id":config.proxy,
          "name":"proxy",
          "link":false
        },
        {
          "id":config.livereload,
          "name":"livereload",
          "link":false
        }
      ])
    });
  };

  exports.temp = function(req, res){
    res.render('temp', {});
  };

}());
