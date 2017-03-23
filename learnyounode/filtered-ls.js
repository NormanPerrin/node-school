var fs = require('fs');

var path = process.argv[2];
var filter = new RegExp("\." + process.argv[3] + "$");

fs.readdir(path, function (err, data) {
  data.forEach(function (dir) {
    if (filter.test(dir)) console.log(dir);
  });
});
