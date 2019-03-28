var http = require('http');
var url = require('url');
var fs = require('fs');


var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type" : "text/html"});
	var result = url.parse(request.url, true);
	console.log(result.path)
	if (result.path == "/"){
		fs.readFile(__dirname + "/article.html", function(erro,html){
		response.write(html);
		response.end();
	});
	}else if (result.path == "/contact"){
		fs.readFile(__dirname + result.path + ".html", function(erro,html){
		response.write(html);
		response.end();
	});
	}else{
		fs.readFile(__dirname + '/error.html', function(erro,html){
		response.write(html);
		response.end();
	});
	}
});

server.listen(3000, function(){
	console.log("Http server.")
});