var express = require('express');
var fs = require('fs');

var file = "index.html";
var buffer = new Buffer("", "utf-8");

buffer = fs.readFileSync(file);


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
