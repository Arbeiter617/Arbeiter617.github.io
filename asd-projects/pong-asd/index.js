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

var p1Points = 0;
var p2Points = 0;





  var positionX2 = 280;
  var positionY2 = 200;
  var speedX2 = 1;
  var speedY2 = 0;
  
    var ball = {};
    ball.id = '#ball';
    ball.x = 280;
    ball.y = 200;
    ball.width = 20;
    ball.height = 20;



 



  // Game Item Objects

  



var leftPaddle = gameObject("#leftPaddle");
var rightPaddle = gameObject("#rightPaddle");
var ball = gameObject("#ball");



  // one-time setup
var interval = setInterval(newBallFrame, FRAMES_PER_SECOND_INTERVAL);
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


  

function newBallFrame() {
    // Update position of game item //
    repositionBall();
    // Check for collisons //

  }
















  
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


  function Points() {

      p2Points++;
      p1Points++;

      if(ball.x < BOARD_WIDTH) {
         document.getElementById("p1").innerHTML = p1Points;

      }
      else if (ball.x > BOARD_WIDTH) {
          document.getElementById("p1").innerHTML = p2Points;
          
      }
  }

Points();




  function doCollide(ball, leftPaddle) {
    
    ball.leftX = ball.x;
    ball.topY = ball.y;
    ball.rightX = ball.x + ball.width;
    ball.bottomY = ball.y + ball.height;
  
    leftPaddle.leftX = leftPaddle.x;
    leftPaddle.topY = leftPaddle.y;
    leftPaddle.rightX = leftPaddle.x + ball.width;
    leftPaddle.bottomY = leftPaddle.y + ball.height;
  
    
 
  
  

    // TODO: Return true if they are overlapping, false otherwise
	
	// Hint: use the following conditions:
    // red left < blue right
    // red right > blue left
    // red top < blue bottom
    // red bottom > blue top
   
   if ((ball.rightX > leftPaddle.leftX) && 
      (ball.leftX < leftPaddle.rightX) &&
      (ball.bottomY > leftPaddle.topY) &&
      (ball.topY < leftPaddle.bottomY)) {
    speedX2 = -1;
   }
  
    else {
    
  }

  
  

}



  function repositionBox() {
//do both for ball and right paddle//
     leftPaddle.y += leftPaddle.speedY;
     $(leftPaddle.id).css("top", leftPaddle.y);

     rightPaddle.y += rightPaddle.speedY;
     $(rightPaddle.id).css("top", rightPaddle.y);

   }

  function repositionBall() {

    positionX2 += speedX2;
     $('#ball').css("left", positionX2);

     positionY2 += speedY2;
     $('#ball').css("top", positionY2);
   
  }

  function changeSpeedX2(newSpeed) {
    
    speedX2 = newSpeed;
  
  }

  function changeSpeedY2(newSpeed) {
   speedY2 = newSpeed;
  
  }


}
  
//_______________________________________________________________________________________________________________//

  



  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  

