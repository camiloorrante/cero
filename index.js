var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200);
}).listen(8082);

console.log("app listening on 8082");
