const resources = require('./../../resources/model');
const Gpio = require('onoff').Gpio;

let sensor;
const device = resources.pi.sensors.pir;


function connectHardware() {
   sensor = new Gpio(device.gpio, 'in', 'both');
   
  sensor.watch(function (err, value) {
         if (err) exit(err);
        device.value = !!value;
        
 
 
});
   

}

function start(params){
   
connectHardware();
 }
 
 
 function stop() {
 sensor.unexport();
 }
 




exports.start = function (params) {};
exports.stop = function () {};
