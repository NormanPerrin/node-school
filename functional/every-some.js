function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (paramUsr) {
      return goodUsers.some(function (listUsr) {
        return paramUsr.id === listUsr.id;
      });
    });
  };
}

module.exports = checkUsersValid;
