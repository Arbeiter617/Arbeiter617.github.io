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
    'width': $(id).width(),
    'height': $(id).height(),
    'speedX': 1,
    'speedY': 0,
    }
 }

var p1Points = 0;
var p2Points = 0;





  


 



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
const imageArray = [
  "https://images.unsplash.com/photo-1508185159346-bb1c5e93ebb4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55cf14db6ed80a0410e229368963e9d8&auto=format&fit=crop&w=1900&q=80",
  "https://images.unsplash.com/photo-1495480393121-409eb65c7fbe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05ea43dbe96aba57d48b792c93752068&auto=format&fit=crop&w=1351&q=80",
  "https://images.unsplash.com/photo-1501611724492-c09bebdba1ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ebdb0480ffed49bd075fd85c54dd3317&auto=format&fit=crop&w=1491&q=80",
  "https://images.unsplash.com/photo-1417106338293-88a3c25ea0be?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1565ecb73a2b38784db60c3b68ab3b8&auto=format&fit=crop&w=1352&q=80",
  "https://images.unsplash.com/photo-1500520198921-6d4704f98092?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac4bc726064d0be43ba92476ccae1a75&auto=format&fit=crop&w=1225&q=80",
  "https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a1325446cbf9b56f6ee549623a50696&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1437075130536-230e17c888b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ff573beba18e5bf45eb0cccaa2c862b3&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1eac0f70640261e09152340f13b79144&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1506057278219-795838d4c2dd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f68d8d7b0223cd906ea8cac13421881d&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1488402410361-05152fa654d3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5266aadc96d5b5b23996e7120d3190a8&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1475598322381-f1b499717dda?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cb49f991ce8dd947b45ccd1bd905ec8c&auto=format&fit=crop&w=1355&q=80",
  "https://images.unsplash.com/photo-1501949997128-2fdb9f6428f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=951ee200e732c9b8c4ea0a7372ca9d27&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a98c0f9a6c602e964e6533de413d59ba&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1476547362848-ed2a9f99cd29?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b4647c9e25267c25866936c916e4aa8&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1506017669510-0bcbe8003d70?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9403f5d4ac23a5726bfc3c8308b31c01&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1489447068241-b3490214e879?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a85cb0d68de38ae2aa00d8a9663a320a&auto=format&fit=crop&w=1350&q=80"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
  let randomNum = Math.floor(Math.random() * array.length); 
  image.setAttribute("src", array[randomNum]);
}







  

function newBallFrame() {
    // Update position of game item //
    repositionBall();
    // Check for collisons //

  }
















  
  function newFrame() {
    repositionBox();
         doCollide(ball, leftPaddle);
         doCollide(ball, rightPaddle);
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

//test
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
  
    
 
  

   
   if ((ball.rightX > leftPaddle.leftX) && 
      (ball.leftX < leftPaddle.rightX) &&
      (ball.bottomY > leftPaddle.topY) &&
      (ball.topY < leftPaddle.bottomY)) {
       ball.speedX = -ball.speedX;
     
    
   }
  
    else if ((ball.rightX > rightPaddle.leftX) && 
      (ball.leftX < rightPaddle.rightX) &&
      (ball.bottomY > rightPaddle.topY) &&
      (ball.topY < rightPaddle.bottomY)) {
     ball.speedX = +ball.speedX;
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

    ball.x += ball.speedX;
     $('#ball').css("left", ball.x);

     ball.y += ball.speedY;
     $('#ball').css("top", ball.y);
   
  }

  function changeSpeedX2(newSpeed) {
    
    ball.speedX = newSpeed;
  
  }

  function changeSpeedY2(newSpeed) {
   ball.speedY = newSpeed;
  
  }


}
  
//_______________________________________________________________________________________________________________//

  



  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  

