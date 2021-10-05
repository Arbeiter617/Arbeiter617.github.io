// requestServer.js file

var args = process.argv.slice(2);

const http = require("http");
const request = require("request");
const port = 8686;

console.log(port);

http.createServer(function(req,res) {
    var url = args[0] ? args[0] : "coolmathgames.com";
    request(url, function (error, response, body) {
   
        if (!body || !response || (error === null && response.statusCode !== 200)){
            

            res.end("bad URL\n");
            return;
            
        } else if(response.statusCode === 200 && !error === true) {
            res.writeHead(200, {'Content-Type': 'text/plain'});

            res.write(body);
            res.end();
        

        } else {
            res.writeHead(response.statusCode, {'Content-Type': 'text/plain'});
            res.write(error.toString());
            res.end();
        }
    }
    
    
)}).listen(port);




