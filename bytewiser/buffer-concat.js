var b;

process.stdin.on('data', function (chunk) {
  if (typeof b === 'undefined') b = chunk;
  else b = Buffer.concat([b, chunk]);
});

process.stdin.on('end', function () {
  console.log(b);
});

