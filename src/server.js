var myModule = require('./handler');
var http = require('http');

var server = http.createServer(myModule);


//localhost:3000
server.listen(5000, function() {
  console.log('now listening to port 5000');
})
