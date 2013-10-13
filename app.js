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
  		var Request = require('url').parse(url, true);
      var Mopidy = require("mopidy").Mopidy;
  		
      //grab shit form api
      var dedicator = Request.query.dedicator;
  		var song = Request.query.song;
  		var light = Request.query.light;

      //create instance of mopidy
      var mopidy = new Mopidy({
          //pass the URL to the WebSocket end point
          webSocketUrl: "ws://localhost:6680/mopidy/ws/"
      });
      //log all possible events
      mopidy.on(console.log.bind(console));
  	}

  response.end('Page Success');

}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');