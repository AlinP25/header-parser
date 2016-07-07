var express = require("express");
var app = express();

app.get('/', function (req, res) {
    var lang = req.headers['accept-language'].split(',')[0];
    var firstSplit = req.headers['user-agent'].split(') ')[0]
    var secondSplit = firstSplit.split('(');
    var os = secondSplit[1];
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAdress;
    console.log(ip);
    res.end(JSON.stringify({
        'ip': ip,
        'language': lang,
        'software': os,
    }));
});

app.listen(8080);