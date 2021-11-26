var sensorRoutes = require('./../routes/sensors');



app.use(cors());
app.use('/pi/sensors', sensorRoutes);

const express = require('express'),
	cors = require('cors');
	
app.get('/', function(req, res){
    res.send('Some response for accessing the root');
});


app.get('/pi', function(req, res){
    res.send('192.168.1.103:8484/pi');
});

var app = express();

module.exports = app;
