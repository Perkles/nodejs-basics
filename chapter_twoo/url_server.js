var http = require('http');
var url = require('url');


var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write("<h1> Query String data: </h1>");
	response.write(request.url);
	var result = url.parse(request.url, true);
	for(var key in result.query){
		response.write("<h2>"+key+" : "+result.query[key]+"</h2>");
	}
	response.end();
});
server.listen(3000, function(){
	console.log("Http server.")
});