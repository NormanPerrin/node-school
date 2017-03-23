var net = require('net');

var port = Number(process.argv[2]);

net.createServer(function (socket) {
  var date = new Date();
  var YYYY = date.getFullYear();
  var MM = date.getMonth() + 1;
  if (MM < 10) MM = '0' + MM;
  var DD = date.getDate();
  if (DD < 10) DD = '0' + DD;
  var hh = date.getHours();
  if (hh < 10) hh = '0' + hh;
  var mm = date.getMinutes();
  if (mm < 10) mm = '0' + mm;
  var formated = YYYY+'-'+MM+'-'+DD+' '+hh+':'+mm+'\n';
  socket.end(formated);
}).listen(port);


