var fs = require('fs');

module.exports = function (path, ext, func) {
  var filter = new RegExp('\.' + ext + '$');
  fs.readdir(path, function (err, data) {
    // si hay un error retorno el cb(error)
    if (err) return func(err);
    // si no hay error, sigo como antes
    var dirs = [];
    data.forEach(function (dir) {
      if (filter.test(dir)) dirs.push(dir);
    });
    func(null, dirs);
  });
};
