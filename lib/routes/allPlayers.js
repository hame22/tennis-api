'use strict';

exports.allPlayers = function (req, res) {
	res.send('{"players": ["Djokovic", "Nadal", "Federer", "Murray"]}');
}