#!/usr/bin/env node
/*global require, __dirname, process, module*/
(function () {
  "use strict";
  var express = require('express'),
      routes = require('./routes'),
      path = require('path'),
      fs = require('fs'),
      hbs = require('hbs'),
      httpProxy = require('http-proxy'),
      url       = require('url'),
      child_process = require('child_process'),
      config = require(path.join(__dirname, 'config.json'));

  var app = express(),
      livereload = (process.argv[2]) ? '<script>document.write(\'<script src=\"http://\' + (location.host || \''+config.host+'\').split(\':\')[0] + \':'+config.livereload+'/livereload.js?snipver=1\"></\' + \'script>\')</script>' : ' ',
      remote = (process.argv[2]) ? '<script src=\"http://'+config.host+':8080/target/target-script-min.js#anonymous\"></script>' : ' ';

  function loadPartials(dirName) {
    var partialsDir = __dirname + '/../views/' + dirName,
        filenames = fs.readdirSync(partialsDir);

    filenames.forEach(function (filename) {
      var matches = /^([^.]+).htm$/.exec(filename),
          name,
          template;
      if (!matches) {
        return;
      }
      name = dirName + '-' + matches[1];
      template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
      hbs.registerPartial(name, template);
    });
  }

  function weinre() {
    var spawn = child_process.spawn,
        ls = spawn('node', ['./node_modules/weinre/weinre', '--boundHost', config.host]);

    ls.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
    });

    ls.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });

    ls.on('close', function (code) {
      console.log('child process exited with code ' + code);
    });
  }

  function proxy() {
    var port = config.proxy;
    httpProxy.createServer(function(req, res, proxy) {
      var urlObj = url.parse(req.url),
          host = urlObj.host.split(':').shift(),
          port = urlObj.host.split(':').pop() || 80;

      console.log('proxy: '.concat(host));

      req.headers.host  = urlObj.host;
      req.url           = urlObj.path;

      proxy.proxyRequest(req, res, {
        host    : host,
        port    : port,
        enable  : { xforward: true }
      });
    }).listen(port, function () {
      console.log('Proxy listening on port '.concat(port, ' ...'));
    });
  }

  function addons() {
    weinre();
    proxy();
    loadPartials('controllers');
    loadPartials('directives');
  }

  hbs.registerPartial('livereload', livereload);
  hbs.registerPartial('remote', remote);

  app.set('views', path.join(__dirname, '..', 'views'));
  app.set('view engine', 'html');
  app.engine('html', require('hbs').__express);
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname));
  app.use("/static", express.static(path.join(__dirname, '..', '..', 'static')));
  app.get('/main', routes.main);
  app.get('/temp', routes.temp);
  addons();
  module.exports = app;

}());
