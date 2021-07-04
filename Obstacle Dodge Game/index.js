
$(document).ready(function() {
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// INITIALIZATION ////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////






  var FPS = 60;

function player(id){
return{
  'id': id,
  'x': parseFloat($(id).css('left')),
  'y': parseFloat($(id).css('top')),
  "Xv": 0,
  "Yv": 0,
  'width': $(id).width(),
  'height': $(id).height(),
  }
}

 var points = 0;
var level = 1;
var objSpeed = -1;
var multi = false;


var shopColor;


var player1 = player("#player1");
var players = player("#players");

//Moving Obstacles//
var movOb1 = player("#movob1");
var movOb2 = player("#movob2");
var movOb3 = player("#movob3");
var movOb4 = player("#movob4");
var movOb5 = player("#movob5");
var movOb6 = player("#movob6");


//start of normal obstacles//



var player2 = player("#player2");
var player3 = player("#player3");
var player4 = player("#player4");
var player5 = player("#player5");
var player6 = player("#player6");
var player7 = player("#player7");
var player8 = player("#player8");
var player9 = player("#player9");
var player10 = player("#player10");
var coin = player("#coin");

multiPlayerOption();
instructions();












 var difficulty = (prompt("How fast would you like to move? (1 - 10)", ""));


if(difficulty >= 1 && difficulty <= 10) {
  alert("Ok, you chose " + difficulty + " !");
} else {
  alert("Not a correct value! Please choose again!")
   difficulty = (prompt("How fast would you like to move? (1 - 10)", ""));
}


 





  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////// CORE LOGIC //////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  setInterval(newFrame, 1000 / FPS); // execute newFrame() 60 times per second

$(document).on('keydown', setPlayerVelocity); // execute setPlayerVelocity() in response to keydown events
$(document).on('keyup', stopPlayerVelocity);  // execute stopPlayerVelocity() in response to keydown events
  
  function newFrame() {
    speedSetter();
     levelCounter(level);
     scoreCount(player);
      speed(player1);
      movement(player);
      collideCheck(player, coin);
    
    
  }





  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

function randomizer(player) {
 player2.y = Math.floor(Math.random() * (200 - -200 + 1));
    player2.x = Math.floor(Math.random() * (200 - -200 + 1));
    player3.y = Math.floor(Math.random() * (200 - -200 + 1));
    player3.x = Math.floor(Math.random() * (200 - -200 + 1));
    player4.y = Math.floor(Math.random() * (200 - -200 + 1));
    player4.x = Math.floor(Math.random() * (200 - -200 + 1));
    player5.y = Math.floor(Math.random() * (200 - -200 + 1));
    player5.x = Math.floor(Math.random() * (200 - -200 + 1));
    movOb1.x = Math.floor(Math.random() * (200 - -200 + 1));
     movOb1.y = 382;
 
    objSpeed += -1;
 
    coin.y = Math.floor(Math.random() * (200 - -200 + 1));
    coin.x = Math.floor(Math.random() * (200 - -200 + 1));
}


function levelCounter(level) {
  document.getElementById("levelC").innerHTML = level;
}




function scoreCount(player) {
document.getElementById("p2").innerHTML = points;
}





function speed(player) {
  player1.x += player1.Xv;
  player1.y += player1.Yv;
  players.x += players.Xv;
  players.y += players.Yv;
  
  movOb1.x += movOb1.Xv;
  movOb1.y += movOb1.Yv;
  movOb2.x += movOb2.Xv;
  movOb2.y += movOb2.Yv;
  movOb3.x += movOb3.Xv;
  movOb3.y += movOb3.Yv;
  movOb4.x += movOb4.Xv;
  movOb4.y += movOb4.Yv;
  movOb5.x += movOb5.Xv;
  movOb5.y += movOb5.Yv;
  movOb6.x += movOb6.Xv;
  movOb6.y += movOb6.Yv;
  
}




function movement(player) {
  $(player1.id).css("left", player1.x);
  $(player1.id).css("top", player1.y);
  $(players.id).css("left", players.x);
  $(players.id).css("top", players.y);
  
  
  $(player2.id).css("left", player2.x);
  $(player2.id).css("top", player2.y);
  $(player3.id).css("left", player3.x);
  $(player3.id).css("top", player3.y);
  $(player4.id).css("left", player4.x);
  $(player4.id).css("top", player4.y);
  $(player5.id).css("left", player5.x);
  $(player5.id).css("top", player5.y);
  $(player6.id).css("left", player6.x);
  $(player6.id).css("top", player6.y);
  $(player7.id).css("left", player7.x);
  $(player7.id).css("top", player7.y);
   $(player8.id).css("left", player8.x);
  $(player8.id).css("top", player8.y);
   $(player9.id).css("left", player9.x);
  $(player9.id).css("top", player9.y);
   $(player10.id).css("left", player10.x);
  $(player10.id).css("top", player10.y);
  
  //moving objects//
  
  $(movOb1.id).css("left", movOb1.x);
  $(movOb1.id).css("top", movOb1.y);
  $(movOb2.id).css("left", movOb2.x);
  $(movOb2.id).css("top", movOb2.y);
  $(movOb3.id).css("left", movOb3.x);
  $(movOb3.id).css("top", movOb3.y);
  $(movOb4.id).css("left", movOb4.x);
  $(movOb4.id).css("top", movOb4.y);
  $(movOb5.id).css("left", movOb5.x);
  $(movOb5.id).css("top", movOb5.y);
  $(movOb6.id).css("left", movOb6.x);
  $(movOb6.id).css("top", movOb6.y);
  
  
  
  
  $(coin.id).css("left", coin.x); 
  $(coin.id).css("top", coin.y);

}







function collideCheck(player, coin) {
  
  //moving objects collisions//
  if(movOb1.y <= 0) {
    movOb1.Yv++;
  }
  
  if(movOb1.y >= 400) {
    movOb1.Yv--;
  }
  
  if(movOb2.y <= 0) {
    movOb2.Yv++;
  }
  
  if(movOb2.y >= 400) {
    movOb2.Yv--;
  }
  
  if(movOb3.y <= 0) {
    movOb3.Yv++;
  }
  
  if(movOb3.y >= 400) {
    movOb3.Yv--;
  }
  
  if(movOb4.y <= 0) {
    movOb4.Yv++;
  }
  
  if(movOb4.y >= 400) {
    movOb4.Yv--;
  }
  
  if(movOb5.y <= 0) {
    movOb5.Yv++;
  }
  
  if(movOb5.y >= 400) {
    movOb5.Yv--;
  }
  if(movOb6.y <= 0) {
    movOb6.Yv++;
  }
  
  if(movOb6.y >= 400) {
    movOb6.Yv--;
  }
  //End of moving objects collisions//
//begginning og players collisions//
  
if(multi === true) {
  
    if (players.y >= 400) {
    players.y = -10;
   
 
} else if(players.y <= -10 ) {
 players.y = 400;
}


if (players.x >= 400) {
  players.x = 0;
 
} else if(players.x <= 0) {
 players.x = 400;
}
  
  if ((players.rightX > player2.leftX) && 
    (players.leftX < player2.rightX) &&
     (players.bottomY > player2.topY) &&
    (players.topY < player2.bottomY)) {
     
    
    randomizer(player);
    
      if(points === 10) {
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
    
    
    
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
    if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
    
    
    
    
  
    
    alert("You died!");
    alert("You got " + points + " points!");
    
    var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
           
          
                $('#player1').css({"background-color":shopColor});
           
                  if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
              
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    
    
    coin.x = -1000;
     coin.y = 500;
    
  } else if ((players.rightX > player3.leftX) && 
            (players.leftX < player3.rightX) &&
            (players.bottomY > player3.topY) &&
             (players.topY < player3.bottomY)) {

    
   randomizer(player);
    
     if(points === 10) {
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
    
    
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
   
  
    
    alert("You died!");
    alert("You got " + points + " points!");
    
     var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
              if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
              if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    coin.x = -1000;
     coin.y = 500;



  } else if ((players.rightX > player4.leftX) && 
            (players.leftX < player4.rightX) &&
            (players.bottomY > player4.topY) &&
             (players.topY < player4.bottomY)) {

  randomizer(player);
    
    if(points === 10) {
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
    
    
    
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
   
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
  
    
    alert("You died!");
    alert("You got " + points + " points!");
    
     var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
           
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             
                 if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    
    coin.x = -1000;
     coin.y = 500;



  }
  
   else if ((players.rightX > player5.leftX) && 
            (players.leftX < player5.rightX) &&
            (players.bottomY > player5.topY) &&
             (players.topY < player5.bottomY)) {

     
     randomizer(player);
     
     if(points === 10) {
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
     
      if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
    
  
    
    alert("You died!");
    alert("You got " + points + " points!");
     
      var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
               if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
               if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
     level = 1;
     
     player6.x = -1000;
    player6.y = 500;
     player7.x = -1000;
    player7.y = 500;
     player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
     
     movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
     
     coin.x = -1000;
     coin.y = 500;



  } 
  
  
  else if ((players.rightX > player6.leftX) && 
            (players.leftX < player6.rightX) &&
            (players.bottomY > player6.topY) &&
             (players.topY < player6.bottomY)) {

     
   randomizer(player);
     
     if(points === 10) {
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
    
  
    
    alert("You died!");
    alert("You got " + points + " points!");
     
      var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           
               if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                 if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    coin.x = -1000;
     coin.y = 500;



  }
  
  else if ((players.rightX > player7.leftX) && 
            (players.leftX < player7.rightX) &&
            (players.bottomY > player7.topY) &&
             (players.topY < player7.bottomY)) {

     
    randomizer(player);
     
     if(points === 10) {
       
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
    
  
    
    alert("You died!");
    alert("You got " + points + " points!");
     
      var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
              if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
           
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});

               if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
                if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    
    coin.x = -1000;
     coin.y = 500;



  }
  
  else if ((players.rightX > coin.leftX) && 
            (players.leftX < coin.rightX) &&
            (players.bottomY > coin.topY) &&
             (players.topY < coin.bottomY)) {
    
    

        points++;
    console.log(points);
     coin.x = -1000;
     coin.y = 500;

//moving objects//


  }  else if ((players.rightX > movOb1.leftX) && 
            (players.leftX < movOb1.rightX) &&
            (players.bottomY > movOb1.topY) &&
             (players.topY < movOb1.bottomY)) {

     
    randomizer(player);
     
     if(points === 10) {
       
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
    
  
    
    alert("You died!");
    alert("You got " + points + " points!");
     
      var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    coin.x = -1000;
     coin.y = 500;



  }  else if ((players.rightX > movOb2.leftX) && 
            (players.leftX < movOb2.rightX) &&
            (players.bottomY > movOb2.topY) &&
             (players.topY < movOb2.bottomY)) {

     
    randomizer(player);
     
     if(points === 10) {
       
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
    
  
    
    alert("You died!");
    alert("You got " + points + " points!");
     
      var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    
    coin.x = -1000;
     coin.y = 500;



  } else if ((players.rightX > movOb3.leftX) && 
            (players.leftX < movOb3.rightX) &&
            (players.bottomY > movOb3.topY) &&
             (players.topY < movOb3.bottomY)) {

     
    randomizer(player);
     
     if(points === 10) {
       
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
  
    
    alert("You died!");
    alert("You got " + points + " points!");
     
      var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
           
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    coin.x = -1000;
     coin.y = 500;



  } else if ((players.rightX > movOb4.leftX) && 
            (players.leftX < movOb4.rightX) &&
            (players.bottomY > movOb4.topY) &&
             (players.topY < movOb4.bottomY)) {

     
    randomizer(player);
     
     if(points === 10) {
       
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
  
    
    alert("You died!");
    alert("You got " + points + " points!");
     
      var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    coin.x = -1000;
     coin.y = 500;



  } else if ((players.rightX > movOb5.leftX) && 
            (players.leftX < movOb5.rightX) &&
            (players.bottomY > movOb5.topY) &&
             (players.topY < movOb5.bottomY)) {

     
    randomizer(player);
     
     if(points === 10) {
       
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
    
  
    
    alert("You died!");
    alert("You got " + points + " points!");
     
      var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
           
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    coin.x = -1000;
     coin.y = 500;



  } else if ((players.rightX > movOb6.leftX) && 
            (players.leftX < movOb6.rightX) &&
            (players.bottomY > movOb6.topY) &&
             (players.topY < movOb6.bottomY)) {

     
    randomizer(player);
     
     if(points === 10) {
       
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
    
  
    
    alert("You died!");
    alert("You got " + points + " points!");
     
      var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    coin.x = -1000;
     coin.y = 500;



  }
  
  
  
  
  
} 
  


  
  
  
  
  
  
  
//begginning of player1 collisions//   
  if (player1.y >= 400) {
    player1.y = -10;
   
 
} else if(player1.y <= -10 ) {
 player1.y = 400;
}


if (player1.x >= 400) {
  player1.x = 0;
  
  
 
} else if(player1.x <= 0) {
 player1.x = 400;
 
 randomizer(player);
 
 if(points === 10) {
   level++;
   
   objSpeed += -1;
   
   console.log("level2 reached!");
   
   
   
   //level1
   
 player6.y = Math.floor(Math.random() * (200 - -200 + 1));
 player6.x = Math.floor(Math.random() * (200 - -200 + 1));
 
 } else if(points === 20) {
   level++;
   
   objSpeed += -2;
   
   //level2
   if(points >= 20) {
     movOb1.x = Math.floor(Math.random() * (200 - -200 + 1));
   movOb1.y = 382;
   
   movOb2.x = Math.floor(Math.random() * (200 - -200 + 1));
   movOb2.y = 382;
   
   movOb3.x = Math.floor(Math.random() * (200 - -200 + 1));
   movOb3.y = 382;
   }
   
   
   
   
   
   
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 } else if (points === 40) {
   level++;
   
   objSpeed += -2;
   
   //level3//
   if(points >= 40) {
     movOb1.x = Math.floor(Math.random() * (200 - -200 + 1));
   movOb1.y = 382;
   
   movOb2.x = Math.floor(Math.random() * (200 - -200 + 1));
   movOb2.y = 382;
   
   movOb3.x = Math.floor(Math.random() * (200 - -200 + 1));
   movOb3.y = 382;
   
   movOb4.x = Math.floor(Math.random() * (200 - -200 + 1));
   movOb4.y = 382;
   }
   
   
   
   
   
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
   player8.x = Math.floor(Math.random() * (200 - -200 + 1));
   player8.y = Math.floor(Math.random() * (200 - -200 + 1));
   
 } else if (points === 70) {
   level++;
   
   objSpeed += -2;
   
   //level 4//
   
   if(points >= 70) {
    movOb1.x = Math.floor(Math.random() * (200 - -200 + 1));
   movOb1.y = 382;
   
   movOb2.x = Math.floor(Math.random() * (200 - -200 + 1));
   movOb2.y = 382;
   
   movOb3.x = Math.floor(Math.random() * (200 - -200 + 1));
   movOb3.y = 382;
   
   movOb4.x = Math.floor(Math.random() * (200 - -200 + 1));
   movOb4.y = 382;
   
   movOb5.x = Math.floor(Math.random() * (200 - -200 + 1));
   movOb5.y = 382;
   
   movOb6.x = Math.floor(Math.random() * (200 - -200 + 1));
   movOb6.y = 382;
   }
   
  
   
   
   
   
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
   player8.x = Math.floor(Math.random() * (200 - -200 + 1));
   player8.y = Math.floor(Math.random() * (200 - -200 + 1));
   player9.x = Math.floor(Math.random() * (200 - -200 + 1));
   player9.y = Math.floor(Math.random() * (200 - -200 + 1));
 } else if(points === 100) {
   level++
   
   objSpeed += -2;
   
   //level 5//
   
   
   
   
   
   
   
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
   player8.x = Math.floor(Math.random() * (200 - -200 + 1));
   player8.y = Math.floor(Math.random() * (200 - -200 + 1));
   player9.x = Math.floor(Math.random() * (200 - -200 + 1));
   player9.y = Math.floor(Math.random() * (200 - -200 + 1));
   player10.x = Math.floor(Math.random() * (200 - -200 + 1));
   player10.y = Math.floor(Math.random() * (200 - -200 + 1));
 }
 

   
 points++;
}
  


  
  
  
  player1.leftX = player1.x;
  player1.topY = player1.y;
  player1.rightX = player1.x + player1.width;
  player1.bottomY = player1.y + player1.height;
  
  players.leftX = players.x;
  players.topY = players.y;
  players.rightX = players.x + player1.width;
  players.bottomY = players.y + player1.height;

  player2.leftX = player2.x;
  player2.topY = player2.y;
  player2.rightX = player2.x + player1.width;
  player2.bottomY = player2.y + player1.height;

  player3.leftX = player3.x;
  player3.topY = player3.y;
  player3.rightX = player3.x + player1.width;
  player3.bottomY = player3.y + player1.height;
  
  player4.leftX = player4.x;
  player4.topY = player4.y;
  player4.rightX = player4.x + player1.width;
  player4.bottomY = player4.y + player1.height;
  
  player5.leftX = player5.x;
  player5.topY = player5.y;
  player5.rightX = player5.x + player1.width;
  player5.bottomY = player5.y + player1.height;
  
  player6.leftX = player6.x;
  player6.topY = player6.y;
  player6.rightX = player6.x + player1.width;
  player6.bottomY = player6.y + player1.height;
  
  player7.leftX = player7.x;
  player7.topY = player7.y;
  player7.rightX = player7.x + player1.width;
  player7.bottomY = player7.y + player1.height;
  
  player8.leftX = player8.x;
  player8.topY = player8.y;
  player8.rightX = player8.x + player1.width;
  player8.bottomY = player8.y + player1.height;
  
  player9.leftX = player9.x;
  player9.topY = player9.y;
  player9.rightX = player9.x + player1.width;
  player9.bottomY = player9.y + player1.height;
  
  player10.leftX = player10.x;
  player10.topY = player10.y;
  player10.rightX = player10.x + player1.width;
  player10.bottomY = player10.y + player1.height;
  
  //moving objects//
  movOb1.leftX = movOb1.x;
  movOb1.topY = movOb1.y;
  movOb1.rightX = movOb1.x + player1.width;
  movOb1.bottomY = movOb1.y + player1.height;
  
  movOb2.leftX = movOb2.x;
  movOb2.topY = movOb2.y;
  movOb2.rightX = movOb2.x + player1.width;
  movOb2.bottomY = movOb2.y + player1.height;
  
  movOb3.leftX = movOb3.x;
  movOb3.topY = movOb3.y;
  movOb3.rightX = movOb3.x + player1.width;
  movOb3.bottomY = movOb3.y + player1.height;
  
  movOb4.leftX = movOb4.x;
  movOb4.topY = movOb4.y;
  movOb4.rightX = movOb4.x + player1.width;
  movOb4.bottomY = movOb4.y + player1.height;
  
  movOb5.leftX = movOb5.x;
  movOb5.topY = movOb5.y;
  movOb5.rightX = movOb5.x + player1.width;
  movOb5.bottomY = movOb5.y + player1.height;
  
  movOb6.leftX = movOb6.x;
  movOb6.topY = movOb6.y;
  movOb6.rightX = movOb6.x + player1.width;
  movOb6.bottomY = movOb6.y + player1.height;
  
  
  //end of moving objects//
  
  coin.leftX = coin.x;
  coin.topY = coin.y;
  coin.rightX = coin.x + player1.width;
  coin.bottomY = coin.y + player1.height;



  



 
  if ((player1.rightX > player2.leftX) && 
    (player1.leftX < player2.rightX) &&
     (player1.bottomY > player2.topY) &&
    (player1.topY < player2.bottomY)) {
     
    
    randomizer(player);
    
      if(points === 10) {
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
    
    
    
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
    
  
    
    alert("You died!");
    alert("You got " + points + " points!");
    
    var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
              if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
               if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    
    
    coin.x = -1000;
     coin.y = 500;
    
  } else if ((player1.rightX > player3.leftX) && 
            (player1.leftX < player3.rightX) &&
            (player1.bottomY > player3.topY) &&
             (player1.topY < player3.bottomY)) {

    
   randomizer(player);
    
     if(points === 10) {
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
    
    
  
   players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
    
  
    
  alert("You died!");
    alert("You got " + points + " points!");
    
    var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
              if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
               if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    coin.x = -1000;
     coin.y = 500;



  } else if ((player1.rightX > player4.leftX) && 
            (player1.leftX < player4.rightX) &&
            (player1.bottomY > player4.topY) &&
             (player1.topY < player4.bottomY)) {

  randomizer(player);
    
    if(points === 10) {
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
    
    
    
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
  
    
    alert("You died!");
    alert("You got " + points + " points!");
    
    var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
              if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
               if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    
    coin.x = -1000;
     coin.y = 500;



  }
  
   else if ((player1.rightX > player5.leftX) && 
            (player1.leftX < player5.rightX) &&
            (player1.bottomY > player5.topY) &&
             (player1.topY < player5.bottomY)) {

     
     randomizer(player);
     
     if(points === 10) {
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
   
     
      if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
    
  
   alert("You died!");
    alert("You got " + points + " points!");
    
    var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
              if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
               if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
     level = 1;
     
     player6.x = -1000;
    player6.y = 500;
     player7.x = -1000;
    player7.y = 500;
     player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
     
     movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
     
     coin.x = -1000;
     coin.y = 500;



  } 
  
  
  else if ((player1.rightX > player6.leftX) && 
            (player1.leftX < player6.rightX) &&
            (player1.bottomY > player6.topY) &&
             (player1.topY < player6.bottomY)) {

     
   randomizer(player);
     
     if(points === 10) {
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
  
    
   alert("You died!");
    alert("You got " + points + " points!");
    
    var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
              if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
               if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    coin.x = -1000;
     coin.y = 500;



  }
  
  else if ((player1.rightX > player7.leftX) && 
            (player1.leftX < player7.rightX) &&
            (player1.bottomY > player7.topY) &&
             (player1.topY < player7.bottomY)) {

     
    randomizer(player);
     
     if(points === 10) {
       
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
  
    
    alert("You died!");
    alert("You got " + points + " points!");
    
    var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
              if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
               if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    
    coin.x = -1000;
     coin.y = 500;



  }
  
  else if ((player1.rightX > coin.leftX) && 
            (player1.leftX < coin.rightX) &&
            (player1.bottomY > coin.topY) &&
             (player1.topY < coin.bottomY)) {
    
    

        points++;
    console.log(points);
     coin.x = -1000;
     coin.y = 500;

//moving objects//


  }  else if ((player1.rightX > movOb1.leftX) && 
            (player1.leftX < movOb1.rightX) &&
            (player1.bottomY > movOb1.topY) &&
             (player1.topY < movOb1.bottomY)) {

     
    randomizer(player);
     
     if(points === 10) {
       
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
  
    alert("You died!");
    alert("You got " + points + " points!");
    
    var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
              if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
               if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    coin.x = -1000;
     coin.y = 500;



  }  else if ((player1.rightX > movOb2.leftX) && 
            (player1.leftX < movOb2.rightX) &&
            (player1.bottomY > movOb2.topY) &&
             (player1.topY < movOb2.bottomY)) {

     
    randomizer(player);
     
     if(points === 10) {
       
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
    
  
    
    alert("You died!");
    alert("You got " + points + " points!");
    
    var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
              if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
               if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    
    coin.x = -1000;
     coin.y = 500;



  } else if ((player1.rightX > movOb3.leftX) && 
            (player1.leftX < movOb3.rightX) &&
            (player1.bottomY > movOb3.topY) &&
             (player1.topY < movOb3.bottomY)) {

     
    randomizer(player);
     
     if(points === 10) {
       
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
    
  
    
    alert("You died!");
    alert("You got " + points + " points!");
    
    var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
              if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
               if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    coin.x = -1000;
     coin.y = 500;



  } else if ((player1.rightX > movOb4.leftX) && 
            (player1.leftX < movOb4.rightX) &&
            (player1.bottomY > movOb4.topY) &&
             (player1.topY < movOb4.bottomY)) {

     
    randomizer(player);
     
     if(points === 10) {
       
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
    
  
    
    alert("You died!");
    alert("You got " + points + " points!");
    
    var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
              if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
               if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    coin.x = -1000;
     coin.y = 500;



  } else if ((player1.rightX > movOb5.leftX) && 
            (player1.leftX < movOb5.rightX) &&
            (player1.bottomY > movOb5.topY) &&
             (player1.topY < movOb5.bottomY)) {

     
    randomizer(player);
     
     if(points === 10) {
       
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
    
  
   alert("You died!");
    alert("You got " + points + " points!");
    
    var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
              if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
               if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    coin.x = -1000;
     coin.y = 500;



  } else if ((player1.rightX > movOb6.leftX) && 
            (player1.leftX < movOb6.rightX) &&
            (player1.bottomY > movOb6.topY) &&
             (player1.topY < movOb6.bottomY)) {

     
    randomizer(player);
     
     if(points === 10) {
       
        player6.y = Math.floor(Math.random() * (200 - -200 + 1));
        player6.x = Math.floor(Math.random() * (200 - -200 + 1));
      } else if(points === 20) {
   player6.y = Math.floor(Math.random() * (200 - -200 + 1));
   player6.x = Math.floor(Math.random() * (200 - -200 + 1));
   player7.y = Math.floor(Math.random() * (200 - -200 + 1));
   player7.x = Math.floor(Math.random() * (200 - -200 + 1));
 }
     
  
    players.Xv = 0;
    players.Yv = 0;
    player1.Yv = 0;
    player1.Xv = 0;
    
    
    
    player1.x = 200;
    player1.x = 300;
    
    
     if(multi === true) {
       players.x = 300;
       players.y = 300;
    } else if(multi === false) {
      players.x = -1000;
      players.y = 500;
    }
    
  
    
    alert("You died!");
    alert("You got " + points + " points!");
    
    var shopAsk = (prompt("Would you like to access the shop?", ""));

    if(shopAsk == 'Yes' || shopAsk == 'yes') {
  
      var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
  
      if(shop == 'Orange' || shop == 'orange') {
         if(points >= 2) {
            alert("You have bought the color Orange!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
           
           if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
            
         } else if(points < 2) {
           alert("Not enough points! Come again later!")
         }
      } else if(shop == 'Blue' || shop == 'blue') {
           if(points >= 5) {
              alert("You have bought the color Blue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
              if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 5) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'green' || shop == 'Green') {
           if(points >= 10) {
              alert("You have bought the color Green!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
               if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 10) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'yellow' || shop == 'Yellow') {
           if(points >= 50) {
              alert("You have bought the color Yellow!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 50) {
             alert("Not enough points! Come again later!")
           }
      } else if(shop == 'tan' || shop == 'Tan') {
           if(points >= 70) {
              alert("You have bought the color Tan!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 70) {
             alert("Not enough points! Come again later!")
           }  
      }  else if(shop == 'grey' || shop == 'Grey') {
           if(points >= 100) {
              alert("You have bought the color Grey!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 100) {
             alert("Not enough points! Come again later!")
           }  
      } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
           if(points >= 120) {
              alert("You have bought the color SkyBlue!")
              shopColor = shop;
                $('#player1').css({"background-color":shopColor});
             
             if(multi === true) {
                    $('#players').css({"background-color":shopColor});
                  }
             
           } else if(points < 120) {
             alert("Not enough points! Come again later!")
           }  
      }
 }
    
    
    points = 0;
    level = 1;
    
    player6.x = -1000;
    player6.y = 500;
    player7.x = -1000;
    player7.y = 500;
    player8.x = -1000;
    player8.y = 500;
    player9.x = -1000;
    player9.y = 500;
    player10.x = -1000;
    player10.y = 500;
    
    movOb1.x = -1000;
    movOb1.y = 500;
    movOb2.x = -1000;
    movOb2.y = 500;
    movOb3.x = -1000;
    movOb3.y = 500;
    movOb4.x = -1000;
    movOb4.y = 500;
    movOb5.x = -1000;
    movOb5.y = 500;
    movOb6.x = -1000;
    movOb6.y = 500;
    
    coin.x = -1000;
     coin.y = 500;



  }
  
  //end of moving objects//
  
  
  
  
  
  
  

}

function instructions() {
alert("Press Up and down arrows to move the game player! Press left arrow to start game! If you are playing multi-player, use the WS and arrow keys to move arround! Go to the shop to buy new colors! Try not to hit the red obstacles!")

}


function multiPlayerOption() {
   var multiplayer = (prompt("Would you like to play multi-player? If so, WS and arrow keys will be used! Player 1 (Arrow keys) will have to start the game by pressing the left arrow key! Enjoy!", ""));
  
  if(multiplayer == 'yes' || multiplayer == 'Yes') {
     multi = true;
    
    players.x = 300;
    players.y = 300;
    
     alert("Ok, multi-player activated");
  } else {
    
    
    multi = false;
    
    players.x = -1000;
    players.y = 500;
    
    alert("Ok, playing single player!");
  }
  
}










  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// KEYBOARD FUNCTIONS //////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

var KEY = {
  "UP": 38,
  "DOWN": 40,
  "LEFT": 37,

  
  
};

var KEY2 = {
  "W": 87,
  "S": 83,
  "A": 65,  
};









  /** 
  Key codes:
  - left: 37
  - up: 38
  - right: 39
  - down: 40
  - w: 87
  - a: 65
  - s: 83
  - d: 68
  - c: 67
  */
  

   function speedSetter() {
     if(level >= 2) {
         movOb1.Yv = objSpeed;
     } else if(level >= 3) {
       movOb1.Yv = objSpeed;
       movOb2.Yv = objSpeed;
       movOb3.Yv = objSpeed;
     } else if(level >= 4) {
       movOb1.Yv = objSpeed;
     movOb2.Yv = objSpeed;
     movOb3.Yv = objSpeed;
     movOb4.Yv = objSpeed;
     } else if(level >= 5) {
        movOb1.Yv = objSpeed;
     movOb2.Yv = objSpeed;
     movOb3.Yv = objSpeed;
     movOb4.Yv = objSpeed;
     movOb5.Yv = objSpeed;
     movOb6.Yv = objSpeed;
     }
     
    
     
   }

  function setPlayerVelocity(event) {
      if (event.which === KEY.UP) {
         player1.Yv = -difficulty; 
      }  else if(event.which === KEY2.W) {
        players.Yv = -difficulty;
      }
        
      
    
      if (event.which === KEY.DOWN) {
         player1.Yv = +difficulty; 
        
      } else if(event.which === KEY2.S) {
        players.Yv = +difficulty;
      } 
    
    
    
      if (event.which === KEY.LEFT) {
         player1.Xv = -difficulty; 
        players.Xv = -difficulty;
      } 
    
    
    
    
    
      
      
  }
    
    
    
  

  function stopPlayerVelocity(event) {
      if (event.which === KEY.UP || event.which === KEY.DOWN) {
         player1.Yv = 0; 
      } else if(event.which === KEY2.W || event.which === KEY2.S) {
        players.Yv = 0;
      }

      
  }

}); 


// DO NOT DELETE











