const resources = require('./../../resources/model');
const Gpio = require('onoff').Gpio;


let actuator1, actuator2;
let model = resources.pi.actuators.leds;
let pluginName = resources.pi.actuators.leds[1].name + ", " + resources.pi.actuators.leds[2].name;






exports.start = function (params) {
	connectHardware();
	console.log("starting " + pluginName + " plugin");
};

// TODO 1: Complete the ledsPlugin!
actuator1 = new Gpio(leds[1].gpio, 'out');
actuator2 = new Gpio(leds[2].gpio, 'out');

 function stop() {
 LEDGpioConnection.write(leds[1]);
 LEDGpioConnection.write(leds[2])
 }
