const resources = require('./../../resources/model');
const Gpio = require('onoff').Gpio;

let sensor;
const device = resources.pi.sensors.pir;
exports.start = function (params) {};

function connectHardware() {
   sensor = new Gpio(device.gpio, 'in', 'both');

}

function start(params){
   
connectHardware();
 }
 

sensor.watch(function (err, value) {
  if (err) exit(err);
 device.value = !!value;
});

