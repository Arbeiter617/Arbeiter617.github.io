var onoff = require('onoff');
var yes = true;

var numberValue = 1000;
var number = 1;

var Gpio = onoff.Gpio,
  
  led2 = new Gpio(21, 'out'),
  interval;

interval = setInterval(function () {
  var value = (led2.readSync() + number);
  
  
  
  
  
  
  
  if(decoded === decodeMorse("....")) {
  led2.write(value, function() {
    
  value++;
    
   
  });
  }
   
  
}, numberValue);

process.on('SIGINT', function () {
  clearInterval(interval);
  
  led2.writeSync(0);
  led2.unexport();
  console.log('Bye, bye!');
  process.exit();
});



//Morris Code part//

function decodeMorse(morseCode) {
  var ref = { 
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '-.-.-.-': '!',
  };

  return morseCode
    .split('   ')
    .map(
      a => a
        .split(' ')
        .map(
          b => ref[b]
        ).join('')
    ).join(' ');
}

var decoded = decodeMorse("....");
var decoded2 = decodeMorse(".");
var decoded3 = decodeMorse(".-..");
var decoded4 = decodeMorse(".-..");
var decoded5 = decodeMorse("---");
//console.log(decoded, decoded2, decoded3, decoded4, decoded5);




