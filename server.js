var fs = require('fs');
var port = 3000;

var http = require('http');
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   if (req.url === '/file.txt') {
     fs.createReadStream(__dirname + '/file.txt').pipe(res);
   } else {
     res.end("Hello World");
   }
}).listen(port);
console.log('Server up on port ' + port);
