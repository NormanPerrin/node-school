var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, 'utf8', function (err, data) {
  console.log(data.match(/\n/g).length);
});
