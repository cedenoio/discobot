// var http = require('http');

// http.createServer(function(request, response) {
	
// 	response.writeHead(200);

// 	response.write("Dog is running.");

// 	setTimeout(function(){
// 		response.write("Dog is done.");
// 		response.end();
// 	}, 5000);

// }).listen(8080);

// console.log('Listening on port 8080...');


var http = require('http');

http.createServer(function (request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});

  	if(request.url.indexOf('/dedication')  != -1){
  		var url = request.url;

  		//could use require('querystring'), though passing second argument as true is the same
  		var request = require('url').parse(url, true);
  		var dedicator = request.query.dedicator;
  		var song = request.query.song;
  		var light = request.query.light;
  	}

  response.end('Page Success');

}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');