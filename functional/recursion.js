// fn :: (prev, actual, index, arr)

function reduce(arr, fn, initial) {
  return (function reduceActual(i, prev) {
    if (i === arr.length) return prev;
    return reduceActual(i + 1, fn(prev, arr[i], i, arr));
  })(0, initial);
}

module.exports = reduce;