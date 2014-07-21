'use strict';

var express = require('express'),
config = require('./lib/configuration'),
routes = require('./lib/routes');

var app = express();

app.set('port', config.get('server:port'));
console.log(app.get('port'));

app.get('/allPlayers', routes.allPlayers);

app.listen(app.get('port'), function () {
	console.log('Listening....');
});

module.exports = app;