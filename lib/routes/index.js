'use strict';

exports.index = function (req, res) {
	res.send('{"players": ["Djokovic", "Nadal", "Federer", "Murray"]}');
}

exports.allPlayers = function (req, res) {
	res.send('{"players": ["Djokovic", "Nadal", "Federer", "Murray"]}');
}

exports.headToHead = function (req, res) {
	res.send('{"h2hPlayers": ["Murray", "Djokovic"], "results": [{"winner": "Murray", "loser": "Nadal", "score": "6-2, 7-6"}, {"winner": "Nadal", "loser": "Murray", "score": "6-0, 7-5"}], "players": ["Djokovic", "Nadal", "Federer", "Murray"]}')
}