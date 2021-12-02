const express = require('express'),
	router = express.Router(),
	resources = require('./../resources/model');

var actuatorRoutes = require('./../routes/actuators');
app.use('/pi/actuators', actuatorsRoutes);


router.route('/').get(function (req, res, next) {
res.send(resources.pi.actuators);
});

router.route('/leds').get(function (req, res, next) {
	res.send(resources.pi.actuators.leds);
});

router.route('/leds/:1').get(function (req, res, next) {
	res.send(resources.pi.actuators.leds[req.params.1]);
});

router.route('/leds/:2').get(function (req, res, next) {
	res.send(resources.pi.actuators.leds[req.params.2]);
});

module.exports = router;
