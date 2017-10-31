function getShortMessages(messages) {
  return messages
    .map(function (msj) {
      return msj.message;
    })
    .filter(function (msj) {
      return msj.length < 50;
    });
}

module.exports = getShortMessages;