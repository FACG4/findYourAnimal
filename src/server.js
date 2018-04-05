var myModule = require('./handler');
var http = require('http');



const host = process.env.HOST || "localhost";
const port = process.env.PORT || 9000;

const server = http.createServer(myModule);

server.listen(port, () => {
console.log(`Server running on : http://${host}:${port}`);
});
