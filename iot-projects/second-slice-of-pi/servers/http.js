var converter = require('./../middleware/converter');
var bodyParser = require('body-parser');





var sensorRoutes = require('./../routes/sensors');

var actuatorRoutes = require('./../routes/actuators');


const express = require('express'),
	cors = require('cors');
	
var app = express();
	

app.use(bodyParser.json());
app.use(cors());





app.use('/pi/sensors', sensorRoutes);
app.use('/pi/actuators', actuatorRoutes);

app.get('/', function(req, res){
    res.send('Some response for accessing the root');
});


app.get('/pi', function(req, res){
    res.send('192.168.1.103:8484/pi');
});

app.use(converter());

module.exports = app;

//I read all of the files//
