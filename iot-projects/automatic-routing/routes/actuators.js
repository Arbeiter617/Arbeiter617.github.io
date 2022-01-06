const express = require('express'),
	router = express.Router(),
	resources = require('./../resources/model');
var ledsPlugin = require('./../plugins/internal/ledsPlugin');




router.route('/').get(function (req, res, next) {

req.result = resources.pi.actuators;
next();
});

router.route('/leds').get(function (req, res, next) {
	
	req.result = resources.pi.actuators.leds;
	
next();
});

router.route('/leds/:id').get(function (req, res, next) {
	
	req.result = resources.pi.actuators.leds[req.params.id];
	value = req.body.value;
	leds = req.result;
	ledsPlugin.switchOnOff[req.params.id](req.body.value);
	
next();
});


module.exports = router;
