var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
 var buff = fs.readFileSync(index.htmL);
 if (Buffer.isBuffer(buff){
 show = buff.tostring('utf8');
 (response.send(show);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
