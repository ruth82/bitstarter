var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
 var buff = fs.readFileSync('index.html');
 if (Buffer.isBuffer(buff)){
 var show = buff.toString('utf8');
}
 (response.send(show));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
