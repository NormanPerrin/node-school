var http = require('http');
var url = require('url');

var PORT = process.argv[2];
var BASE = 'api';
var ENDPOINTS = {
  'parsetime': function (strDate) {return parseTime(strDate)},
  'unixtime': function (strDate) {return unixTime(strDate)}
};

function validateUrl(url) {
  return Object.keys(ENDPOINTS).reduce(function (acum, endpoint) {
    var regex = new RegExp('\/'+BASE+'\/'+endpoint, 'i');
    return acum || regex.test(url);
  }, false);
}

function validateQuery(query) {
  return /^iso/i.test(query);
}

function parseTime(strDate) {
  var date = new Date(strDate);
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

function unixTime(strDate) { 
  var date = new Date(strDate);
  return {unixtime: date.getTime()};
}

http.createServer(function (req, res) {
  if (req.method !== 'GET') res.end('Error: expected GET\n');
  var parsedUrl = url.parse(req.url);
  if (validateUrl(parsedUrl.pathname)) {
    if (validateQuery(parsedUrl.query)) {
      var matches = /\/api\/(.*)\?.*=(.*)/i.exec(parsedUrl.href);
      var json = ENDPOINTS[matches[1]](matches[2]);
      res.writeHead(200, {'Content-type': 'application/json'});
      res.end(JSON.stringify(json));
    } else {
      res.end('Error: query not valid\n');
    }
  } else {
    res.end('Error: endpoint not valid\n');
  }
}).listen(PORT);

