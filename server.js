var express = require("express");
var accepts = require("accepts");
var app = express();

app.get('/', function (req, res) {
    var lang = req.headers['accept-language'].split(',')[0];
    var firstSplit = req.headers['user-agent'].split(') ')[0]
    var secondSplit = firstSplit.split('(');
    var os = secondSplit[1];
    res.end(JSON.stringify({
        'ip': 'none',
        'language': lang,
        'software': os,
    }));
});

app.listen(8080);