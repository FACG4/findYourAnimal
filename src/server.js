var http = require('http');
//create server 
var server= http.createServer();

//listen to port 3000
server.listen(3000,function(){
    console.log('you site launch on http://lcoalhost:3000 ');
})