/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  

  // Constant Variables
 
  
  
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / 60;

  var BOARD_WIDTH = $('#board').width();
  var BOARD_HIGHT = $(window).height();
  var  KEY = {
      
      "UP": 38,
      "DOWN": 40,
  }

  var  KEY2 = {
      
      "UP": 87,
      "DOWN": 83,
  }
  
function gameObject(id){
  return{
    'id': id,
    'x': parseFloat($(id).css('left')),
    'y': parseFloat($(id).css('top')),
    'speedX': 0,
    'speedY': 0,
    }
 }

 function moveBall(id) {
     return {
    'id': ball,
    'x': parseFloat($(ball).css('left')),
    'y': parseFloat($(ball).css('top')),
    'speedX': 10,
    'speedY': 10,
     }
 }
  
  
  


 



  // Game Item Objects

  



var leftPaddle = gameObject("#leftPaddle");
var rightPaddle = gameObject("#rightPaddle");
var ball = gameObject("#ball");
var ball = moveBall('#ball');



  // one-time setup
 var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown); 
  $(document).on('keyup', handleKeyUp);                              // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */


















  
  function newFrame() {
    repositionBox();

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyUp(event) {
      changeSpeedY(0, event.which, KEY.UP, leftPaddle);
      changeSpeedY(0, event.which, KEY.DOWN, leftPaddle);
      changeSpeedY(0, event.which, KEY2.UP, rightPaddle);
      changeSpeedY(0, event.which, KEY2.DOWN, rightPaddle);
  }

   function handleKeyDown(event) {
  
  changeSpeedY(-5, event.which, KEY.UP, leftPaddle);
  changeSpeedY(5, event.which, KEY.DOWN, leftPaddle);
  changeSpeedY(-5, event.which, KEY2.UP, rightPaddle);
  changeSpeedY(5, event.which, KEY2.DOWN, rightPaddle);
   }

  

  function changeSpeedY(newSpeed, keycode, arrowKey, whichPaddle) {
   if (keycode === arrowKey) {
     whichPaddle.speedY = newSpeed;
  }
  }



  


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function doCollide(square1, square2) {
    
    square1.leftX = square1.x;
    square1.topY = square1.y;
    square1.rightX = square1.x + square1.width;
    square1.bottomY = square1.y + square1.height;
  
    square2.leftX = square2.x;
    square2.topY = square2.y;
    square2.rightX = square2.x + square1.width;
    square2.bottomY = square2.y + square1.height;
  
    
 
  
  

    // TODO: Return true if they are overlapping, false otherwise
	
	// Hint: use the following conditions:
    // red left < blue right
    // red right > blue left
    // red top < blue bottom
    // red bottom > blue top
   
   if ((square1.rightX > square2.leftX) && 
      (square1.leftX < square2.rightX) &&
      (square1.bottomY > square2.topY) &&
      (square1.topY < square2.bottomY)) {
     return true;
   }
  
    else {
    return false;
  }

  
  

}



  function repositionBox() {
//do both for ball and right paddle//
     leftPaddle.y += leftPaddle.speedY;
     $(leftPaddle.id).css("top", leftPaddle.y);

     rightPaddle.y += rightPaddle.speedY;
     $(rightPaddle.id).css("top", rightPaddle.y);

     ball.y += ball.speedY;
     $(ball.id).css("top", ball.y);

     ball.x += ball.speedX;
     $(ball.id).css("left", ball.x);
      }

   }

  

  
//_______________________________________________________________________________________________________________//

  



  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  

