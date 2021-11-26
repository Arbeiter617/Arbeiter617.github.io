var Gpio = require('onoff').Gpio,
  sensor = new Gpio(4, 'in', 'both');

var onoff = require('onoff');

var Gpio = onoff.Gpio,
  led1 = new Gpio(16, 'out'),
  led2 = new Gpio(21, 'out'),
  interval;
  
  var value = (led1.readSync() + 1) % 2;
var blink = false;
sensor.watch(function (err, value) {
  if (err) exit(err);
     led1.write(value, function() {
    console.log("Changed LED 1 state to: " + value);
  });
  
  led2.write((value + 1) % 2, function() {
    console.log("Changed LED 2 state to: " + ((value + 1) % 2));
  });
  
  
});




//LED//

  interval = setInterval(function () {
  var value = (led1.readSync() + 1) % 2;
 
}, 1000);






//Not LED//
function exit(err) {
  sensor.unexport();
  console.log('ADIOS!')
  process.exit();
}
process.on('SIGINT', exit);
