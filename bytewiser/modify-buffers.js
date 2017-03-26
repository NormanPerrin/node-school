process.stdin.on('data', function (chunk) {
  var i = chunk.indexOf(46);
  while (i !== -1) {
    chunk.write('!', i);
    i = chunk.indexOf(46, i);
  }
  console.log(chunk);
});
