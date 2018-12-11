var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listPlayers', function (req, res) {
    fs.readFile(__dirname + "/" + "players.json", 'utf8', function (err, data) {
        res.end(data);
    });
})

app.get('/listPlayers/:id', function (req, res) {
    fs.readFile(__dirname + "/" + "players.json", 'utf8', function (err, data) {
        var players = [];
        players = JSON.parse(data);
        var player;
        players.forEach(element => {
            if(req.params.id == element.id){
                player = element;
            }
        });
        res.end(JSON.stringify(player));
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
})