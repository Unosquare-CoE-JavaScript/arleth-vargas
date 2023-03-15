const http = require('http');

http.createServer(function (req, res) {
	res.write('hello world!');
	res.end();
}).listen(8080);

console.log('Server started! listening on port 8080')
