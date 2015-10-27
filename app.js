var http = require('http');
var random = require('./randomNumber');
var convert = require('./convertToUSD');
var combineModules = require('./combine');

http.createServer(function(request, response){
    response.writeHead(200);
    //response.write(random(100, 1000000));
    //response.write(convert("2390"));
    response.write(combineModules.display() + combineModules.combine());
    response.end();
}).listen(8000);