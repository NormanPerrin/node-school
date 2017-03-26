var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) throw err;
  data.split('\n').forEach(function (line) {
    console.log(Buffer.from(line));
  });
});


