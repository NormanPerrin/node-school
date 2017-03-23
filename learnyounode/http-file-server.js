var fs = require('fs');
var http = require('http');

var port = process.argv[2];
var path = process.argv[3];

http.createServer(function (req, res) {
  fs.createReadStream(path).pipe(res);
}).listen(port);

