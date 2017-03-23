var filterFunction = require('./module-two');

var path = process.argv[2];
var ext = process.argv[3];

filterFunction(path, ext, function (err, data) {
  if (err) console.log(err);
  else data.forEach(function (d) {console.log(d)});
});
