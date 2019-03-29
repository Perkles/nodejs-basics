var fs = require('fs');

var readDirectory = function() {
	fs.readdir(__dirname, function(error, directory){
		if (error) return error;
		directory.forEach(function(file){
			read(file);
		});
	});
};

var read = function(file){
	var path = './' + file;
	fs.stat(path, function(error, stat){
		if (error) return error;
		if (stat.isFile()){
			console.log('%s %d bytes', file , stat.size);
		}
	});
};

readDirectory();