function countWords(inputWords) {
  return inputWords.reduce(function (counter, word) {
    counter[word] ?
      counter[word]++ :
      counter[word] = 1;
    return counter;
  }, {});
}

module.exports = countWords;