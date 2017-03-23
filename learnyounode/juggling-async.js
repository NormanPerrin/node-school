var http = require('http');

var urls = process.argv.splice(2);

var rtas = [];
urls.forEach(function (url, i) {
  var data = '';
  http.get(url, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (chunk) {
      data += chunk;
    });
    response.on('end', function () {
      rtas.push({order: i, data: data});
      if (rtas.length === 3) {
        rtas.sort(function (a, b) {return a.order - b.order});
        rtas.forEach(function (rta) {
          console.log(rta.data);
        })
      }
    });
  }).on('error', console.error);
});

