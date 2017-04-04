var express = require('express');
var app = express();
var http = require('http');
var port = '8080';

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use('/api/list', function(req, res){
	res.send('[{"info": "item1"},{"info": "item2"},{"info": "item3"},{"info": "item4"},{"info": "item5"},{"info": "item6"},{"info": "item7"},{"info": "item8"},{"info": "item9"}]');
});

app.set('port', port);
var server = http.createServer(app);
server.listen(port);
console.log('server listen at port ' + port);