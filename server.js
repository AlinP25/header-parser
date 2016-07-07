var express = require("express");
var app = express();

app.get('/', function (req, res) {
    /*var lang = req.headers['accept-language'].split(',')[0];
    var firstSplit = req.headers['user-agent'].split(') ')[0]
    var secondSplit = firstSplit.split('(');
    var os = secondSplit[1];
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAdress;
    console.log(ip);*/
    res.end(JSON.stringify({
        'ip': (req.headers['x-forwarded-for'] || req.connection.remoteAdress),
        'language': req.headers['accept-language'].split(',')[0],
        'software': req.headers['user-agent'].split(') ')[0].split('(')[1],
    }));
});

app.listen(process.env.PORT || 8080);