

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
  
  var player1 = player("#player");
    
  var board = player("#board");
  
  var wall1 = player("#wallBoarder1");
  
  var wall2 = player("#wallBoarder2");
  
  var wall3 = player("#wallBoarder3");
  
  var wall4 = player("#wallBoarder4");
  
  var wall5 = player("#wallBoarder5");
    
  var wall6 = player("#wallBoarder6");
    
  var light = player("#light");
    
  var light2 = player("#light2");
    
  var light3 = player("#light3");
    
  var mob = player("#mob");
  
  var mob1 = player("#mob1");
    
  var mob2 = player("#mob2");
    
  var crate = player("#chest");
  
  
  
  
  ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////// CORE LOGIC //////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
  
    setInterval(newFrame, 1000 / FPS); 
    
    $(document).on('keydown', setPlayerVelocity); // execute setPlayerVelocity() in response to keydown events
    $(document).on('keyup', stopPlayerVelocity); 
    
    function newFrame() {
      movement(player);
      speed(player);
      collideCheck(player);
      chase(player)
    }
    
    randomizer(player);
    
  
  
  
  
  
  function randomizer(player) {
   player1.y = 1;
  player1.x = 100;
    
    mob.x = 300;
    mob.y = 0;
    
    
     mob1.x = 150;
    mob1.y = 0;
    
    
    mob2.x = 650;
    mob2.y = 0;
  wall1.y = Math.floor(Math.random() * (200 - -200 + 1));
  wall1.x = Math.floor(Math.random() * (200 - -200 + 1));
  wall2.y = Math.floor(Math.random() * (200 - -200 + 1));
  wall2.x = Math.floor(Math.random() * (200 - -200 + 1));
  wall3.y = Math.floor(Math.random() * (200 - -200 + 1));
  wall3.x = Math.floor(Math.random() * (200 - -200 + 1));
  wall4.y = Math.floor(Math.random() * (200 - -200 + 1));
  wall4.x = Math.floor(Math.random() * (200 - -200 + 1));
  wall5.y = Math.floor(Math.random() * (200 - -200 + 1));
  wall5.x = Math.floor(Math.random() * (200 - -200 + 1));
  wall6.y = Math.floor(Math.random() * (200 - -200 + 1));
  wall6.x = Math.floor(Math.random() * (200 - -200 + 1));
    //crates//
  crate.y = Math.floor(Math.random() * (200 - -200 + 1));
  crate.x = Math.floor(Math.random() * (200 - -200 + 1));
    
    
    
    
    
    
    //mob//
    
  
  }
    
    
  function movement(player) {
    
    $(player1.id).css("left", player1.x);
    $(player1.id).css("top", player1.y);
    
    $(wall1.id).css("left", wall1.x);
    $(wall1.id).css("top", wall1.y);
    $(wall2.id).css("left", wall2.x);
    $(wall2.id).css("top", wall2.y);
    $(wall3.id).css("left", wall3.x);
    $(wall3.id).css("top", wall3.y);
    $(wall4.id).css("left", wall4.x);
    $(wall4.id).css("top", wall4.y);
    $(wall5.id).css("left", wall5.x);
    $(wall5.id).css("top", wall5.y);
    $(wall6.id).css("left", wall6.x);
    $(wall6.id).css("top", wall6.y);
    
   //mobs 
    $(mob.id).css("left", mob.x);
    $(mob.id).css("top", mob.y);
    $(mob1.id).css("left", mob1.x);
    $(mob1.id).css("top", mob1.y);
     $(mob2.id).css("left", mob2.x);
    $(mob2.id).css("top", mob2.y);
    
    //crates//
    $(crate.id).css("left", crate.x);
    $(crate.id).css("top", crate.y);
    
    
  }
    
    
    function speed(player) {
    player1.x += player1.Xv;
    player1.y += player1.Yv;
      
    mob.x += mob.Xv;
    mob.y += mob.Yv;
      
      mob1.x += mob1.Xv;
       mob1.y += mob1.Yv;
      
      mob2.x += mob2.Xv;
       mob2.y += mob2.Yv;
      
      
      
      
    }
    
    
    
    
    
    
    function collideCheck(player) {
      
      
       //Stuff for collisions// 
    
    player1.leftX = player1.x;
    player1.topY = player1.y;
    player1.rightX = player1.x + player1.width;
    player1.bottomY = player1.y + player1.height;
    
    wall1.leftX = wall1.x;
    wall1.topY = wall1.y;
    wall1.rightX = wall1.x + wall1.width;
    wall1.bottomY = wall1.y + wall1.height;
      
    wall2.leftX = wall2.x;
    wall2.topY = wall2.y;
    wall2.rightX = wall2.x + wall2.width;
    wall2.bottomY = wall2.y + wall2.height;
      
    wall3.leftX = wall3.x;
    wall3.topY = wall3.y;
    wall3.rightX = wall3.x + wall3.width;
    wall3.bottomY = wall3.y + wall3.height;
      
    wall4.leftX = wall4.x;
    wall4.topY = wall4.y;
    wall4.rightX = wall4.x + wall4.width;
    wall4.bottomY = wall4.y + wall4.height;
      
    wall5.leftX = wall5.x;
    wall5.topY = wall5.y;
    wall5.rightX = wall5.x + wall5.width;
    wall5.bottomY = wall5.y + wall5.height;
      
    wall6.leftX = wall6.x;
    wall6.topY = wall6.y;
    wall6.rightX = wall6.x + wall6.width;
    wall6.bottomY = wall6.y + wall6.height;
      
    light.leftX = light.x;
    light.topY = light.y;
    light.rightX = light.x + light.width;
    light.bottomY = light.y + light.height;
      
    light2.leftX = light2.x;
    light2.topY = light2.y;
    light2.rightX = light2.x + light2.width;
    light2.bottomY = light2.y + light2.height;
      
    light3.leftX = light3.x;
    light3.topY = light3.y;
    light3.rightX = light3.x + light3.width;
    light3.bottomY = light3.y + light3.height;
      
    mob.leftX = mob.x;
    mob.topY = mob.y;
    mob.rightX = mob.x + mob.width;
    mob.bottomY = mob.y + mob.height;
      
      mob1.leftX = mob1.x;
    mob1.topY = mob1.y;
    mob1.rightX = mob1.x + mob1.width;
    mob1.bottomY = mob1.y + mob1.height;
      
       mob2.leftX = mob2.x;
    mob2.topY = mob2.y;
    mob2.rightX = mob2.x + mob2.width;
    mob2.bottomY = mob2.y + mob2.height;
     
      crate.leftX = crate.x;
    crate.topY = crate.y;
    crate.rightX = crate.x + crate.width;
    crate.bottomY = crate.y + crate.height;
     
    
     
    
      
      
      
      
      if(player1.x <= 0) {
        console.log("Too far");
         player1.Xv = 1;
      }
      if(player1.x >= 785) {
        console.log("Too far");
         player1.Xv = -1;
      }
      
      if(player1.y <= 0) {
        console.log("Too far");
         player1.Yv = 1;
      } 
      
      if(player1.y >= 575) {
        console.log("Too jgjfar");
         player1.Yv = -1;
      }
      
      if ((player1.rightX > wall1.leftX) && 
      (player1.leftX < wall1.rightX) &&
       (player1.bottomY > wall1.topY) &&
      (player1.topY < wall1.bottomY)) {
        
        player1.Xv = 0;
        player1.Yv = 0;
        player1.y = 1;
        player1.x = 100;
          randomizer(player);
  
       alert("You died!");
        console.log("dead");
        
      }
      
        if ((player1.rightX > wall2.leftX) && 
      (player1.leftX < wall2.rightX) &&
       (player1.bottomY > wall2.topY) &&
      (player1.topY < wall2.bottomY)) {
        player1.Xv = 0;
          player1.Yv = 0;
          player1.y = 1;
  player1.x = 100;
            randomizer(player);
  
          console.log("dead");
           alert("You died!");
        
      }
      
        if ((player1.rightX > wall3.leftX) && 
      (player1.leftX < wall3.rightX) &&
       (player1.bottomY > wall3.topY) &&
      (player1.topY < wall3.bottomY)) {
        
         player1.Yv = 0;
          player1.y = 1;
  player1.x = 100;
        alert("You died!");
          console.log("dead");
        
      }
      
        if ((player1.rightX > wall4.leftX) && 
      (player1.leftX < wall4.rightX) &&
       (player1.bottomY > wall4.topY) &&
      (player1.topY < wall4.bottomY)) {
        
           player1.Xv = 0;
          player1.Yv = 0;
          player1.y = 1;
  player1.x = 100;
            randomizer(player);
  
        alert("You died!");
          console.log("dead");
        
      }
      
        if ((player1.rightX > wall5.leftX) && 
      (player1.leftX < wall5.rightX) &&
       (player1.bottomY > wall5.topY) &&
      (player1.topY < wall5.bottomY)) {
        player1.Xv = 0;
          player1.Yv = 0;
          player1.y = 1;
  player1.x = 100;
            randomizer(player);
  
        alert("You died!");
          console.log("dead");
        
      }
      
        if ((player1.rightX > wall6.leftX) && 
      (player1.leftX < wall6.rightX) &&
       (player1.bottomY > wall6.topY) &&
      (player1.topY < wall6.bottomY)) {
        
       //kill player
          player1.Xv = 0;
           player1.Yv = 0;
        player1.y = 1;
          player1.x = 100;
            randomizer(player);
  
           alert("You died!");
          console.log("dead");
          
        
      }
      
      
      
      if ((player1.rightX > crate.leftX) && 
      (player1.leftX < crate.rightX) &&
       (player1.bottomY > crate.topY) &&
      (player1.topY < crate.bottomY)) {
        
       //give player something
        
        crate.x = 10000;
        crate.y = 0;
        
        console.log("Got something");
          
        
      }
      
       if ((player1.rightX > light.leftX) && 
      (player1.leftX < light.rightX) &&
       (player1.bottomY > light.topY) &&
      (player1.topY < light.bottomY)) {
        
       // cant go through here
          
       
      }
      
       if ((player1.rightX > light2.leftX) && 
      (player1.leftX < light2.rightX) &&
       (player1.bottomY > light2.topY) &&
      (player1.topY < light2.bottomY)) {
        
        player1.Xv = 0;
        player1.Yv = 0;
        player1.y = 1;
  player1.x = 100;
          randomizer(player);
          
         
        
         
         
       
      }
      
      if ((player1.rightX > light3.leftX) && 
      (player1.leftX < light3.rightX) &&
       (player1.bottomY > light3.topY) &&
      (player1.topY < light3.bottomY)) {
        
       player1.Xv = 0;
        player1.Yv = 0;
        player1.y = 1;
         player1.x = 100;
          randomizer(player);
          
        
        
        
       
      }
      
    //mobs//   
      
      if ((player1.rightX > mob.leftX) && 
      (player1.leftX < mob.rightX) &&
       (player1.bottomY > mob.topY) &&
      (player1.topY < mob.bottomY)) {
        player1.Xv = 0;
        player1.Yv = 0;
        player1.y = 1;
  player1.x = 100;
          randomizer(player);
  
        alert("You died!");
        console.log("Dead!");
       
      }
      
      if ((player1.rightX > mob1.leftX) && 
      (player1.leftX < mob1.rightX) &&
       (player1.bottomY > mob1.topY) &&
      (player1.topY < mob1.bottomY)) {
        player1.Xv = 0;
      player1.Yv = 0;
        
  
        player1.y = 1;
  player1.x = 100;
          randomizer(player);
  
        alert("You died!");
        console.log("Dead!");
       
      }
      
      if ((player1.rightX > mob2.leftX) && 
      (player1.leftX < mob2.rightX) &&
       (player1.bottomY > mob2.topY) &&
      (player1.topY < mob2.bottomY)) {
        
        player1.Xv = 0;
        player1.Yv = 0;
        player1.y = 1;
  player1.x = 100;
          randomizer(player);
  
        alert("You died!");
        console.log("Dead!");
       
      }
      
    }
    
    function chase(player) {
      if(mob.y >= 575) {
        mob.Yv = -3;
      } else if(mob.y <= 0) {
        mob.Yv = 3;
      }
      
      if ((mob.rightX > wall1.leftX) && 
      (mob.leftX < wall1.rightX) &&
       (mob.bottomY > wall1.topY) &&
      (mob.topY < wall1.bottomY)) {
        
        mob.Yv *= -1;
      }
      
        if ((mob.rightX > wall2.leftX) && 
      (mob.leftX < wall2.rightX) &&
       (mob.bottomY > wall2.topY) &&
      (mob.topY < wall2.bottomY)) {
        
        mob.Yv *= -1;
      }
      
        if ((mob.rightX > wall3.leftX) && 
      (mob.leftX < wall3.rightX) &&
       (mob.bottomY > wall3.topY) &&
      (mob.topY < wall3.bottomY)) {
        
        mob.Yv *= -1;
      }
      
        if ((mob.rightX > wall4.leftX) && 
      (mob.leftX < wall4.rightX) &&
       (mob.bottomY > wall4.topY) &&
      (mob.topY < wall4.bottomY)) {
        
   mob.Yv += 1;      
      }
      
        if ((mob.rightX > wall5.leftX) && 
      (mob.leftX < wall5.rightX) &&
       (mob.bottomY > wall5.topY) &&
      (mob.topY < wall5.bottomY)) {
        
        mob.Yv *= -1;
        
      }
      
        if ((mob.rightX > wall6.leftX) && 
      (mob.leftX < wall6.rightX) &&
       (mob.bottomY > wall6.topY) &&
      (mob.topY < wall6.bottomY)) {
        
        mob.Yv *= -1;
      }
      
      //mob #2//
      
      if(mob1.y >= 575) {
        mob1.Yv = -3;
      } else if(mob1.y <= 0) {
        mob1.Yv = 3;
      }
      
      if ((mob1.rightX > wall1.leftX) && 
      (mob1.leftX < wall1.rightX) &&
       (mob1.bottomY > wall1.topY) &&
      (mob1.topY < wall1.bottomY)) {
        
        mob1.Yv *= -1;
      }
      
        if ((mob1.rightX > wall2.leftX) && 
      (mob1.leftX < wall2.rightX) &&
       (mob1.bottomY > wall2.topY) &&
      (mob1.topY < wall2.bottomY)) {
        
        mob1.Yv *= -1;
      }
      
        if ((mob1.rightX > wall3.leftX) && 
      (mob1.leftX < wall3.rightX) &&
       (mob1.bottomY > wall3.topY) &&
      (mob1.topY < wall3.bottomY)) {
        
        mob1.Yv *= -1;
      }
      
        if ((mob1.rightX > wall4.leftX) && 
      (mob1.leftX < wall4.rightX) &&
       (mob1.bottomY > wall4.topY) &&
      (mob1.topY < wall4.bottomY)) {
        
   mob1.Yv += 1;      
      }
      
        if ((mob1.rightX > wall5.leftX) && 
      (mob1.leftX < wall5.rightX) &&
       (mob1.bottomY > wall5.topY) &&
      (mob1.topY < wall5.bottomY)) {
        
        mob1.Yv *= -1;
        
      }
      
        if ((mob1.rightX > wall6.leftX) && 
      (mob1.leftX < wall6.rightX) &&
       (mob1.bottomY > wall6.topY) &&
      (mob1.topY < wall6.bottomY)) {
        
        mob1.Yv *= -1;
      }
      
      //mob #3
      
      
      if(mob2.y >= 575) {
        mob2.Yv = -3;
      } else if(mob2.y <= 0) {
        mob2.Yv = 3;
      }
      
      if ((mob2.rightX > wall1.leftX) && 
      (mob2.leftX < wall1.rightX) &&
       (mob2.bottomY > wall1.topY) &&
      (mob2.topY < wall1.bottomY)) {
        
        mob2.Yv *= -1;
      }
      
        if ((mob2.rightX > wall2.leftX) && 
      (mob2.leftX < wall2.rightX) &&
       (mob2.bottomY > wall2.topY) &&
      (mob2.topY < wall2.bottomY)) {
        
        mob2.Yv *= -1;
      }
      
        if ((mob2.rightX > wall3.leftX) && 
      (mob2.leftX < wall3.rightX) &&
       (mob2.bottomY > wall3.topY) &&
      (mob2.topY < wall3.bottomY)) {
        
        mob2.Yv *= -1;
      }
      
        if ((mob2.rightX > wall4.leftX) && 
      (mob2.leftX < wall4.rightX) &&
       (mob2.bottomY > wall4.topY) &&
      (mob2.topY < wall4.bottomY)) {
        
   mob2.Yv += 1;      
      }
      
        if ((mob2.rightX > wall5.leftX) && 
      (mob2.leftX < wall5.rightX) &&
       (mob2.bottomY > wall5.topY) &&
      (mob2.topY < wall5.bottomY)) {
        
        mob2.Yv *= -1;
        
      }
      
        if ((mob2.rightX > wall6.leftX) && 
      (mob2.leftX < wall6.rightX) &&
       (mob2.bottomY > wall6.topY) &&
      (mob2.topY < wall6.bottomY)) {
        
        mob2.Yv *= -1;
      }
      
      
      
      
      
      //crates
      
      if(crate.y >= 575) {
        randomizer(player);
      } else if(crate.y <= 0) {
        randomizer(player);
      }
      
      if ((crate.rightX > wall1.leftX) && 
      (crate.leftX < wall1.rightX) &&
       (crate.bottomY > wall1.topY) &&
      (crate.topY < wall1.bottomY)) {
        
        randomizer(player);
        console.log("Hitting");
      }
      
        if ((crate.rightX > wall2.leftX) && 
      (crate.leftX < wall2.rightX) &&
       (crate.bottomY > wall2.topY) &&
      (crate.topY < wall2.bottomY)) {
        
        randomizer(player);
          console.log("Hitting");
      }
      
        if ((mob2.rightX > wall3.leftX) && 
      (mob2.leftX < wall3.rightX) &&
       (mob2.bottomY > wall3.topY) &&
      (mob2.topY < wall3.bottomY)) {
        
       randomizer(player);
          console.log("Hitting");
      }
      
        if ((crate.rightX > wall4.leftX) && 
      (mob2.leftX < wall4.rightX) &&
       (crate.bottomY > wall4.topY) &&
      (crate.topY < wall4.bottomY)) {
        
       randomizer(player);
          console.log("Hitting");
      }
      
        if ((crate.rightX > wall5.leftX) && 
      (crate.leftX < wall5.rightX) &&
       (crate.bottomY > wall5.topY) &&
      (crate.topY < wall5.bottomY)) {
        
       randomizer(player);
          console.log("Hitting");
        
      }
      
        if ((crate.rightX > wall6.leftX) && 
      (crate.leftX < wall6.rightX) &&
       (crate.bottomY > wall6.topY) &&
      (crate.topY < wall6.bottomY)) {
        
        randomizer(player);
          console.log("Hitting");
      }
    }
    
  
    
    
    
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// KEYBOARD FUNCTIONS //////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
  
  var KEY = {
    "UP": 38,
    "DOWN": 40,
    "LEFT": 37,
    "RIGHT": 39,
  
    
    
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
    
  
   
      
       
     
  
    function setPlayerVelocity(event) {
        if (event.which === KEY.UP) {
           player1.Yv = -5; 
        } 
          
        
      
        if (event.which === KEY.DOWN) {
           player1.Yv = 5; 
          
        } 
      
      
      
        if (event.which === KEY.LEFT) {
           player1.Xv = -5; 
          
        } 
      
      if (event.which === KEY.RIGHT) {
           player1.Xv = 5; 
          
        }  
           
      
      
      
      
      
        
        
    }
      
      
      
    
  
    function stopPlayerVelocity(event) {
        if (event.which === KEY.UP || event.which === KEY.DOWN) {
           player1.Yv = 0; 
        } 
          
        
      
      if (event.which === KEY.LEFT || event.which === KEY.RIGHT) {
           player1.Xv = 0; 
        } 
  
        
    }
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  }); 
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    