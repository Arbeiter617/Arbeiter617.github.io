

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
  
  var player1 = player("#player1");
    
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
  
    
    var points = 0;
    
    var GameOver = false;
    
    var shopColor;
    
    var multi = false;
    
     var boss = player("#boss"); 
    
    var bullet = player("#bullet");
    var bullet2 = player("#bullet2");
    var bullet3 = player("#bullet3");
    
    
    var move = false;
    var move1 = false;
    
    var bossTime = false;
  
  
  
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
      chase(player);
      scoreCount(player);
      gameOverTester(player);
      
      if(bossTime === true) {
        bossMovement(player);
      bulletMovement3(player);
      bulletMovement(player);
      bulletMovement2(player);
      enraged(player);
      }
      
      
    }
    
    randomizer(player);
    
  function scoreCount(player) {
  document.getElementById("ScoreC").innerHTML = points;
  }
  
  
  
  
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
    
    $(boss.id).css("left", boss.x);
      $(boss.id).css("top", boss.y);
      
      $(bullet.id).css("left", bullet.x);
      $(bullet.id).css("top", bullet.y);
      
      $(bullet2.id).css("left", bullet2.x);
      $(bullet2.id).css("top", bullet2.y);
      
      $(bullet3.id).css("left", bullet3.x);
      $(bullet3.id).css("top", bullet3.y);
    
    
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
      
      boss.x += boss.Xv;
        boss.y += boss.Yv;
       bullet.x += bullet.Xv;
        bullet.y += bullet.Yv;
      
      bullet2.x += bullet2.Xv;
        bullet2.y += bullet2.Yv;
      
       bullet3.x += bullet3.Xv;
        bullet3.y += bullet3.Yv;
      
      
      
      
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
      
      bullet.leftX = bullet.x;
    bullet.topY = bullet.y;
    bullet.rightX = bullet.x + bullet.width;
    bullet.bottomY = bullet.y + bullet.height;
      
      bullet2.leftX = bullet2.x;
    bullet2.topY = bullet2.y;
    bullet2.rightX = bullet2.x + bullet2.width;
    bullet2.bottomY = bullet2.y + bullet2.height;
      
      bullet3.leftX = bullet3.x;
    bullet3.topY = bullet3.y;
    bullet3.rightX = bullet3.x + bullet3.width;
    bullet3.bottomY = bullet3.y + bullet3.height;
      
      boss.leftX = boss.x;
    boss.topY = boss.y;
    boss.rightX = boss.x + boss.width;
    boss.bottomY = boss.y + boss.height;
     
     
     // bullet
      if(bullet.x <= 0) {
        console.log("Too far");
         bullet.Xv = 5;
      }
      if(bullet.x >= 785) {
        console.log("Too far");
         bullet.Xv = -5;
      }
      
      if(bullet.y <= 0) {
        console.log("Too far");
         bullet.Yv = 5;
      } 
      
      if(bullet.y >= 575) {
        console.log("Too jgjfar");
         bullet.Yv = -5;
      }
      
      
      //bullet 2
      
        if(bullet2.x <= 0) {
        console.log("Too far");
         bullet2.Xv = 5;
      }
      if(bullet2.x >= 785) {
        console.log("Too far");
         bullet2.Xv = -5;
      }
      
      if(bullet2.y <= 0) {
        console.log("Too far");
         bullet2.Yv = 5;
      } 
      
      if(bullet2.y >= 575) {
        console.log("Too jgjfar");
         bullet2.Yv = -5;
      }
      
      //bullet 3
      
      
        if(bullet3.x <= 0) {
        console.log("Too far");
         bullet3.Xv = 5;
      }
      if(bullet3.x >= 785) {
        console.log("Too far");
         bullet3.Xv = -5;
      }
      
      if(bullet3.y <= 0) {
        console.log("Too far");
         bullet3.Yv = 5;
      } 
      
      if(bullet3.y >= 575) {
        console.log("Too jgjfar");
         bullet3.Yv = -5;
      }
      
      
      
      
      
      
      //player
  
      
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
   
        GameOver = true;
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
           
  GameOver = true;
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
          randomizer(player);
           
        alert("You died!");
          GameOver = true;
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
           GameOver = true;
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
          GameOver = true;
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
           GameOver = true;
          console.log("dead");
          
         
        
      }
      
      
      
      if ((player1.rightX > crate.leftX) && 
      (player1.leftX < crate.rightX) &&
       (player1.bottomY > crate.topY) &&
      (player1.topY < crate.bottomY)) {
        
       
        points += 1;
        
        crate.y = Math.floor(Math.random() * (200 - -200 + 1));
        crate.x = Math.floor(Math.random() * (200 - -200 + 1));
        
        
        
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
          
         bossTime = true;
         
        
         
         
       
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
        
        
       bossTime = true;
          
        
        
        
       
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
         GameOver = true;
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
        GameOver = true;
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
         GameOver = true;
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
    
    
  
  function gameOverTester(player) {
         if(GameOver === true) {
      alert("You got " + points + " points!");
      
      var shopAsk = (prompt("Would you like to access the shop?", ""));
      if(shopAsk == 'No' || shopAsk == 'no') {
        points = 0;
        console.log("He said no");
        console.log(points);
        GameOver = false;
        
      }
      
      else if(shopAsk == 'Yes' || shopAsk == 'yes') {
    
        var shop = (prompt("You have " + points + " points. What would you like to buy? (orange = 2, Blue = 5, green = 10, Yellow = 50, Tan = 70, Grey = 100, SkyBlue = 120)", "")); 
    
        if(shop == 'Orange' || shop == 'orange') {
           if(points >= 2) {
              alert("You have bought the color Orange!");
                  
                  
                shopColor = shop;
             
            
                  $('#player1').css({"background-color":shopColor});
             points = 0;
             GameOver = false;
             
                    if(multi === true) {
                      $('#players').css({"background-color":shopColor});
                    }
              
           } else if(points < 2) {
             alert("Not enough points! Come again later!");
             points = 0;
             GameOver = false;
           }
        } else if(shop == 'Blue' || shop == 'blue') {
             if(points >= 5) {
                alert("You have bought the color Blue!");
               
                shopColor = shop;
                  $('#player1').css({"background-color":shopColor});
               points = 0;
               GameOver = false;
               if(multi === true) {
                      $('#players').css({"background-color":shopColor});
                    }
             } else if(points < 5) {
               alert("Not enough points! Come again later!");
               points = 0;
               GameOver = false;
             }
        } else if(shop == 'green' || shop == 'Green') {
             if(points >= 10) {
                alert("You have bought the color Green!");
               
                shopColor = shop;
                  $('#player1').css({"background-color":shopColor});
               points = 0;
               GameOver = false;
               
                  if(multi === true) {
                      $('#players').css({"background-color":shopColor});
                    }
             } else if(points < 10) {
               alert("Not enough points! Come again later!");
               points = 0;
               GameOver = false;
             }
        } else if(shop == 'yellow' || shop == 'Yellow') {
             if(points >= 50) {
                alert("You have bought the color Yellow!")
                shopColor = shop;
                  $('#player1').css({"background-color":shopColor});
               points = 0;
               GameOver = false;
                
                  if(multi === true) {
                      $('#players').css({"background-color":shopColor});
                    }
             } else if(points < 50) {
               alert("Not enough points! Come again later!");
               points = 0;
               GameOver = false;
             }
        } else if(shop == 'tan' || shop == 'Tan') {
             if(points >= 70) {
                alert("You have bought the color Tan!");
                shopColor = shop;
                  $('#player1').css({"background-color":shopColor});
               points = 0;
               GameOver = false;
               
                  if(multi === true) {
                      $('#players').css({"background-color":shopColor});
                    }
               
             } else if(points < 70) {
               alert("Not enough points! Come again later!");
               points = 0;
               GameOver = false;
             }  
        }  else if(shop == 'grey' || shop == 'Grey') {
             if(points >= 100) {
                alert("You have bought the color Grey!")
                shopColor = shop;
                  $('#player1').css({"background-color":shopColor});
               points = 0;
               GameOver = false;
               
                  if(multi === true) {
                      $('#players').css({"background-color":shopColor});
                    }
               
             } else if(points < 100) {
               alert("Not enough points! Come again later!");
               points = 0;
               GameOver = false;
             }  
        } else if(shop == 'skyblue' || shop == 'Skyblue' || shop === 'SkyBlue') {
             if(points >= 120) {
                alert("You have bought the color SkyBlue!")
                shopColor = shop;
                  $('#player1').css({"background-color":shopColor});
               points = 0;
               GameOver = false;
               
                  if(multi === true) {
                      $('#players').css({"background-color":shopColor});
                    }
               
             } else if(points < 120) {
               alert("Not enough points! Come again later!");
               points = 0;
               GameOver = false;
             }  
        }
      
    }
    }
       
    }
    
    
    
    
      function bossMovement(player) {
      if(boss.x <= 500 && move === false) {
        boss.Xv = 5;
      } else if(boss.x >= 500) {
        boss.Xv = 0;
        boss.Yv = -5; 
        
        bullet.Xv = -10;
        move = true;
    
      } 
      
       if(boss.y <= 4 && move === true) {
        boss.Xv = -5;
        boss.Yv = 0;
          
      }
      if(boss.x <= 50 && move === true) {
        boss.Xv = 0;
        boss.Yv = 5;
        move1 = true;
      }
      
      if(boss.y >= 400 && move1 === true && move === true) {
        boss.Xv = 5;
        boss.Yv = 0;
        move = false;
      }
      
      if(boss.x >= 500 && move === false && move1 === true) {
        boss.Xv = 0;
        
        
      }
      
      
    }
  
  
     function bulletMovement(player) {
      if(bullet.x <= 500 && move === false) {
        bullet.Xv = 5;
      }           
    }
    
    
     function bulletMovement2(player) {
      if(boss.x <= 500 && move === false) {
        bullet2.Xv = 5;
      } 
       else if(boss.x >= 500 && move === false) {
        bullet2.Xv = 0;
        bullet2.Yv = -5; 
    
      }  
       
        if(boss.y >= 3 && move === true) {
        bullet2.Xv = -3;
          bullet2.Yv = 5;
       
        
      }
    }
  
  
  function bulletMovement3(player) {
      if(boss.x <= 500 && move === false) {
        bullet3.Xv = 5;
      } else if(boss.x >= 500) {
        bullet3.Xv = 0;
        bullet3.Yv = -5; 
        
       
    
      } 
      
       if(boss.y <= 4 && move === true) {
        bullet3.Xv = -5;
        bullet3.Yv = 0;
          
      }
      if(boss.x >= 50 && move === true) {
        bullet3.Xv = 0;
        bullet3.Yv = 5;
        
      }
      
      
      
     
       
       
     }
    
    boss.leftX = boss.x;
    boss.topY = boss.y;
    boss.rightX = boss.x + boss.width;
    boss.bottomY = boss.y + boss.height;
    
    
    function enraged(bossScript) {
      if(boss.x >= 500 && move === false && move1 === true) {
        
        
        boss.Yv = -5;
        
        
        
      } 
      
      
      
      
      if(boss.y <= 0) {
        move1 = false;
        console.log("Too far");
         boss.Yv = 1;
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
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    