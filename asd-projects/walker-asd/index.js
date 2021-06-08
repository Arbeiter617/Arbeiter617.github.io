/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  
  var FRAMES_PER_SECOND_INTERVAL = 1000 / 60;
  var BOARD_WIDTH = $('#board').width();
  var BOARD_HIGHT = $(window).hight();
  var  KEY = {
      "LEFT": 37,
      "UP": 38,
      "Right": 39,
      "DOWN": 40,
  }

  var positionX = 0;
  var positionY = 0;
  var speedX = 0;
  var speedX = 0;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    // Update position of game item //
    repositionBox();
    // Check for collisons //

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
  // Press key up -> accelerate in the negative Y direction //
  // Press down key -> accelerate in the positive Y direction //
  // And so on for left (-x) and right (x) //

  if (event.which === KEY.LEFT) {
    speedX = -5;
  }
  if (event.which === KEY.UP) {
     speedY = -5;
  }
  if (event.which === KEY.RIGHT) {
    speedX = 5; 
  }
  if (event.which === KEY.DOWN) {
    speedY = 5;
  }

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionBox() {

     positionX += speedX;
     $('#gameItem').css("left", positionX);

     positionY += speedY;
     $('#gameItem').css("top", positionY);
  }

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
