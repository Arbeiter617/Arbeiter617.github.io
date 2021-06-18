/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  
  var FRAMES_PER_SECOND_INTERVAL = 1000 / 60;
  var BOARD_WIDTH = $('#board').width();
  var BOARD_HEIGHT = $('#board').height();
  
  
  var positionX = 0;
  var positionY = 0;
  var speedX = 1;
  var speedY = 0;
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    // Update position of game item //
    repositionBall();
    // Check for collisons //

  }
  
  /* 
  Called in response to events.
  */
  

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionBall() {

     positionX += speedX;
     $('#ball').css("left", positionX);

     positionY += speedY;
     $('#ball').css("top", positionY);
  }

  function changeSpeedX(newSpeed) {
    
    speedX = newSpeed;
  
  }

  function changeSpeedY(newSpeed) {
   speedY = newSpeed;
  
  }


  
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
