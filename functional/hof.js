function repeat(operation, num) {
  operation();
  if (num) repeat(operation, num - 1);
  return;
}

module.exports = repeat;
