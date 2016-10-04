var express = require('express');
var app = express();
var http = require('http');

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Application launched on port ' + port + '.');
});
