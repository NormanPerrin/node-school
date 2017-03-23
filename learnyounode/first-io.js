var fs = require('fs');

var path = process.argv[2];

var content = fs.readFileSync(path, 'utf8');
console.log(content.match(/\n/g).length);

