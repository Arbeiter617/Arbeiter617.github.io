var sensorRoutes = require('./../routes/sensors');






const express = require('express'),
	cors = require('cors');
	
var app = express();
	
app.use('/pi/sensors', sensorRoutes);
app.use(cors());

app.get('/', function(req, res){
    res.send('Some response for accessing the root');
});


app.get('/pi', function(req, res){
    res.send('192.168.1.103:8484/pi');
});




module.exports = app;

//I read all of the files//
