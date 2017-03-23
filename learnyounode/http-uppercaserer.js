var http = require('http');
var stream = require('stream');

var port = process.argv[2];

http.createServer(function (req, res) {
  if (req.method !== 'POST') res.end('POST expected');
  var uppercase = new stream.Transform();
  uppercase._transform = function (data, enc, cb) {
    cb(null, data.toString().toUpperCase());  
  };
  req.pipe(uppercase).pipe(res);
}).listen(port);
