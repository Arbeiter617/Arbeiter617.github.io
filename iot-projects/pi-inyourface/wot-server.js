


const httpServer = require('./servers/http'),
	resources = require('./resources/model');
	
var pirPlugin = require('./plugins/internal/pirPlugin');
pirPlugin.start({});

var dhtPlugin = require('./plugins/internal/dhtPlugin');
dhtPlugin.start({});

var ledsPlugin = require('./plugins/internal/ledsPlugin');
ledsPlugin.start();
ledsPlugin.stop();


const server = httpServer.listen(resources.pi.port, function () {
	console.log("Running the Pi on port " + resources.pi.port);
});

process.on('SIGINT', function() {
	
	pirPlugin.stop();
	dhtPlugin.stop();
	process.exit();
	
});
