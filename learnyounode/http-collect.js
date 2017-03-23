var http = require('http');

var url = process.argv[2];

http.get(url, function (response) {
  var data = '';
  response.setEncoding('utf8');
  response.on('data', function (chunk) {
    data += chunk;
  });
  response.on('end', function () {
    console.log(data.length + '\n' + data);
  });
}).on('error', console.error);
