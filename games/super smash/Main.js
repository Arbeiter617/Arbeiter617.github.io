function setup() {
    createCanvas(900,500);
      
      noSmooth();
      //IMPORTANT: Whenever you add new loads, add one to var pictures in Vars.js
      if(!developerMode) {
          Music.intro = loadSound("Intro.mp3", loaded);
          Music.theme = loadSound("Theme.mp3", loaded);
      }
      
      choochooPic = loadImage("choochoo.png", loaded);
      
    title = loadImage("Title.png", loaded);
      omega = loadImage("floweyMega.png", loaded);
    fawfulPic = loadImage("Fawful.png", loaded);
    quotePic = loadImage("Quote.png", loaded);
    floweyPic = loadImage("Flowey.png", loaded);
    sansPic = loadImage("sans.png", loaded);
    balosPic = loadImage("balos.png", loaded);
      linkPic = loadImage("link.png", loaded);
      badelinePic = loadImage("badeline0.png", loaded);
      groudonPic = loadImage("groudon0.png", loaded);
      randomPic = loadImage("random.png", loaded);
      
      richardLoad = loadImage("Richard.png", loadSprite);
      
      shaggySheet = loadImage("Shaggy.png", loaded);
      projSheet = loadImage("ShaggyProj.png", loaded);
      
      badeline0 = loadImage("badeline0.png", loaded);//Badeline
      badeline1 = loadImage("badeline1.png", loaded);//Badeline
      
      blaster0 = loadImage("blaster0.png", loaded);//gaster blasters
      blaster1 = loadImage("blaster1.png", loaded);
      blaster2 = loadImage("blaster2.png", loaded);
      blaster3 = loadImage("blaster3.png", loaded);
      blaster4 = loadImage("blaster4.png", loaded);
      blaster5 = loadImage("blaster5.png", loaded);
      blaster6 = loadImage("blaster6.png", loaded);
      blaster7 = loadImage("blaster7.png", loaded);
      
      groudon0 = loadImage("groudon0.png", loaded);
      groudon1 = loadImage("groudon1.png", loaded);
      groudon2 = loadImage("groudon2.png", loaded);
      groudon3 = loadImage("groudon3.png", loaded);
      groudon4 = loadImage("groudon4.png", loaded);
      groudon5 = loadImage("groudon5.png", loaded);
      groudon6 = loadImage("groudon6.png", loaded);
      groudon7 = loadImage("groudon7.png", loaded);
      
      egaddPic = loadImage("egadd.png", loaded);//egadd frames
      egadd1 = loadImage("egadd01.png", loaded);
      egadd2 = loadImage("egadd02.png", loaded);
      egadd3 = loadImage("egadd03.png", loaded);
      egadd4 = loadImage("egadd04.png", loaded);
      egadd5 = loadImage("egadd05.png", loaded);
      egadd6 = loadImage("egadd06.png", loaded);
      egadd7 = loadImage("egadd07.png", loaded);
      egadd8 = loadImage("egadd08.png", loaded);
      egadd9 = loadImage("egadd09.png", loaded);
      egadd10 = loadImage("egadd10.png", loaded);
      
      toadPic = loadImage("toad.png", loaded);//toad frames
      toad0 = loadImage("toad0.png", loaded);
      toad1 = loadImage("toad1.png", loaded);
      toad2 = loadImage("toad2.png", loaded);
      toad3 = loadImage("toad3.png", loaded);
      toad4 = loadImage("toad4.png", loaded);
      toad5 = loadImage("toad5.png", loaded);
      toad6 = loadImage("toad6.png", loaded);
      toad7 = loadImage("toad7.png", loaded);
      toad8 = loadImage("toad8.png", loaded);
      toad9 = loadImage("toad9.png", loaded);
      toad10 = loadImage("toad10.png", loaded);
      toad11 = loadImage("toad11.png", loaded);
      toad12 = loadImage("toad12.png", loaded);
      toad13 = loadImage("toad13.png", loaded);
      toad14 = loadImage("toad14.png", loaded);
      toad15 = loadImage("toad15.png", loaded);//toad frames
      
      glitchPic = loadImage("Glitch.png", loaded);//glitch frames
      glitch1 = loadImage("glitch1.png", loaded);//glitch frames
      glitch2 = loadImage("glitch2.png", loaded);//glitch frames
      glitch3 = loadImage("glitch3.png", loaded);//glitch frames	
      
      link0 = loadImage("link0.png", loaded);//link frames
      link1 = loadImage("link1.png", loaded);//link frames
      link2 = loadImage("link2.png", loaded);//link frames
      link3 = loadImage("link3.png", loaded);//link frames
      
      quote0 = loadImage("quote0.png", loaded);//quote frames
      quote1 = loadImage("quote1.png", loaded);//quote frames
      quote3 = loadImage("quote3.png", loaded);//quote frames
      
      quote4 = loadImage("quote4.png", loaded);//quote frames
      quote5 = loadImage("quote5.png", loaded);//quote frames
      quote7 = loadImage("quote7.png", loaded);//quote frames
      
      sans0 = loadImage("sans0.png", loaded);//sans frames
      sans1 = loadImage("sans1.png", loaded);//sans frames
      
      sans2 = loadImage("sans2.png", loaded);//sans frames
      sans3 = loadImage("sans3.png", loaded);//sans frames
      
      fawful0 = loadImage("fawful0.png", loaded);//fawful frames
      fawful1 = loadImage("fawful1.png", loaded);//fawful frames
      fawful2 = loadImage("fawful2.png", loaded);//fawful frames
      fawful3 = loadImage("fawful3.png", loaded);//fawful frames
      
      fawful4 = loadImage("fawful4.png", loaded);//fawful frames
      fawful5 = loadImage("fawful5.png", loaded);//fawful frames
      fawful6 = loadImage("fawful6.png", loaded);//fawful frames
      fawful7 = loadImage("fawful7.png", loaded);//fawful frames
      
      smashBall = loadImage("smash.png", loaded);//Smash ball
  }
  
  function draw() {
    angleMode(DEGREES);
    background(0);
    textAlign(CENTER,CENTER);
    if(menu === 3){//intro
          if(keys[68] && keys[69] && keys[86] && mouseIsPressed) {
              developerMode = true;
              Music.main = emptyMusic;
              Music.intro = emptyMusic;
              Music.theme = emptyMusic;
          }
      push();
      translate(850,450);
      push();
      rotate(frameCount*2);
      fill(255,255,255);
      ellipse(0,0,100,100);
      fill(0,0,0);
      rect(-50,10,100,10);
      rect(-30,-50,20,100);
      pop();
      pop();
      textSize(40);
      fill(255,255,255);
      textAlign(LEFT);
      if(loading > 100){
        loading = 100;
      }
          //anim.draw(100,100,50,60);//Animation example
          //anim.move(2);//Animation example
      text("Loading...".substring(0,7+((frameCount/10) % 4)),500,450);
      text(loading+"%",700,450);
      textAlign(CENTER,CENTER);
      if(loading >= 100 || developerMode){
              menu = 0;
              if(mobileControls.active) {
                  Music.mobile.play();
              }
              Music.intro.play();
              
              floweyMega = new SpriteSheet(omega, 160, 90, 900, 506);//900, 506
              floweyMega.load();
              
              smashB = new SpriteSheet(smashBall, 50, 50, 50, 50);//sub-load
              smashB.load();
              
              shaggy = new SpriteSheet(shaggySheet, 61, 73, 50, 60);
              shaggy.load();
              shaggyPic = shaggy.get(0);
              
              shaggyProj = new SpriteSheet(projSheet, 15, 12, 30, 24);
              shaggyProj.load();
              
              proj = [new Attack([shaggyProj.get(0),shaggyProj.get(1),shaggyProj.get(2)]), new Attack([shaggyProj.get(3),shaggyProj.get(4)]), new Attack([shaggyProj.get(5),shaggyProj.get(6),shaggyProj.get(7),shaggyProj.get(8)])];
  
              item.smash = new Item(100, 100, smashB);
              
              blasterR = new Attack([blaster0, blaster1, blaster2, blaster3]);
              blasterL = new Attack([blaster4, blaster5, blaster6, blaster7]);
      }
    }//Intro
      if(menu === 0 || menu === 1 || menu === 2 || menu === 6) {
          if(!Music.theme.isPlaying() && !Music.intro.isPlaying()) {
              Music.theme.loop();
          }
      }
    if(menu === 0){//main menu
      noStroke();
      for(var i = 0;i < fire.length;i ++){
        fill(200,70 + random(-50,50),50,100);
        triangle(fire[i][0] + random(-10,10),fire[i][1] + random(-10,10),fire[i][2] + random(-10,10),fire[i][3] + random(-10,10),fire[i][4] + random(-10,10),fire[i][5] + random(-10,10));
        fire[i][0] += random(2,5);
        fire[i][1] -= random(2,5);
        fire[i][2] += random(2,5);
        fire[i][3] -= random(2,5);
        fire[i][4] += random(2,5);
        fire[i][5] -= random(2,5);
        if(fire[i][5] < 0 || fire[i][4] < 0 || fire[i][3] < 0 || fire[i][2] < 0 || fire[i][1] < 0 || fire[i][0] < 0){
          fire.splice(i,1);
        }
      }
      if((frameCount % 30) % 3 <= 1){
        fire.push([random(0,600),random(200,500),random(0,600),random(200,500),random(0,600),random(200,500)]);
      }
      image(title,0,0);
      push();
      translate(-300 + slideX[0],0 + slideY[0]);
      fill(230,40,40);
      ellipse(400,350,100,100);
      rect(400,300,150,100);
      fill(250,40,40);
      ellipse(400,350,80,80);
      rect(400,310,140,80);
      noFill();
      stroke(230,20,20);
      strokeWeight(5);
      arc(400,350,70,70,210,260);
      fill(0,0,0,150);
      noStroke();
      textSize(60);
      text("Fight!",455,350);
      pop();
      if(dist(mouseX,mouseY,100,350) < 50 || (mouseX > 100 && mouseX < 250 && mouseY > 300 && mouseY < 400)){
        slideX[0] = (mouseX-pmouseX)/2;
        slideY[0] = (mouseY-pmouseY)/2;
      }else{
        slideY[0] = 0;
        slideX[0] = 0;
      }
      if(dist(mouseX,mouseY,700,350) < 50 || (mouseX > 700 && mouseX < 850 && mouseY > 300 && mouseY < 400)){
        slideX[1] = (mouseX-pmouseX)/2;
        slideY[1] = (mouseY-pmouseY)/2;
      }else{
        slideY[1] = 0;
        slideX[1] = 0;
      }
          push();
      translate(300 + slideX[1],0 + slideY[1]);
      fill(230,40,40);
      ellipse(400,350,100,100);
      rect(400,300,150,100);
      fill(250,40,40);
      ellipse(400,350,80,80);
      rect(400,310,140,80);
      noFill();
      stroke(230,20,20);
      strokeWeight(5);
      arc(400,350,70,70,210,260);
      fill(0,0,0,150);
      noStroke();
      textSize(45);
      text("Settings",455,350);
      pop();    
      fill(255,255,255);
      textSize(35);
      text("Version " + version + " " + pre,450,350);
      textSize(20);
      text("All characters belong to Nintendo, Studio Pixel, or Toby Fox",450,480);
    }//Main menu
    if(menu === 1){//settings
      noStroke();
      backButton();
      fill(50,50,50);
      rect(0,((playerNum-1)*133)-10,72,120);
      rect(0,0,62,100);
      rect(0,133,62,100);
      rect(0,266,62,100);
      rect(0,400,62,100);
      textSize(50);
      fill(220,130,130);
      text("P1",31,50);
      fill(130,130,220);
      text("P2",31,183);
      fill(130,220,130);
      text("P3",31,316);
      fill(220,130,220);
      text("P4",31,450);
      fill(30,150,70);
      textSize(130);
      text("Settings",450,100);
      if(keySelect[0] === false){
        if(mouseX < 62 && mouseY > 0 && mouseY < 100 && mouseIsPressed){
          playerNum = 1;
        }
        if(mouseX < 62 && mouseY > 133 && mouseY < 233 && mouseIsPressed){
          playerNum = 2;
        }
        if(mouseX < 62 && mouseY > 266 && mouseY < 366 && mouseIsPressed){
          playerNum = 3;
        }
        if(mouseX < 62 && mouseY > 400 && mouseY < 500 && mouseIsPressed){
          playerNum = 4;
        }
      }
          
          fill(150, 150, 150, 200);
          ellipse(800, 450, 80, 80);
          fill(0);
          textSize(35);
          text(mobileControls.active, 800, 450);
          textSize(20);
          fill(255);
          text("Mobile\nControls (1P only)", 800, 380);
          
          //CPU difficulty
          textSize(30);
          fill(255);
          text("CPU difficulty: " + player[playerNum-1].difficulty,580, 450);
          fill(90);
          rect(534, 469, 92, 12);
          for(var z = 0;z < 10;z ++) {
              if(player[playerNum-1].difficulty > z) {
                  fill(75 + 20*z, 180 - 20*z, 100 - 10*z);
                  rect(z*10+535, 470, 10, 10);
              }
              if(mouseX > z*10+525 && mouseX < z*10+535 && mouseY > 470 && mouseY < 480 && mouseIsPressed && z !== 0) {
                  player[playerNum-1].difficulty = z;
              }
          }
          
      //player controls
      textSize(25);
      fill(255,255,255);
      text("Up",250,170);
      text("Left",140,440);
      text("Down",250,440);
      text("Right",360,440);
      text("Attack",470,220);
      text("Special",580,220);
      text("Shield",690,220);
      text("Pause",800,220);
      keyButton(200,200,controls[playerNum-1].up);//button
      keyButton(200,310,controls[playerNum-1].down);
      keyButton(90,310,controls[playerNum-1].left);
      keyButton(310,310,controls[playerNum-1].right);
      keyButton(420,250,controls[playerNum-1].attack);//button
      keyButton(530,250,controls[playerNum-1].special);
      keyButton(640,250,controls[playerNum-1].shield);
      keyButton(750,250,controls[playerNum-1].pause);
      if(mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300 && mouseIsPressed){
        keySelect = [true,0];
      }
      if(mouseX > 90 && mouseX < 190 && mouseY > 310 && mouseY < 410 && mouseIsPressed){
        keySelect = [true,1];
      }
      if(mouseX > 200 && mouseX < 300 && mouseY > 310 && mouseY < 410 && mouseIsPressed){
        keySelect = [true,2];
      }
      if(mouseX > 310 && mouseX < 410 && mouseY > 310 && mouseY < 410 && mouseIsPressed){
        keySelect = [true,3];
      }
      if(mouseX > 420 && mouseX < 520 && mouseY > 250 && mouseY < 350 && mouseIsPressed){
        keySelect = [true,4];
      }
      if(mouseX > 530 && mouseX < 630 && mouseY > 250 && mouseY < 350 && mouseIsPressed){
        keySelect = [true,5];
      }
      if(mouseX > 640 && mouseX < 740 && mouseY > 250 && mouseY < 350 && mouseIsPressed){
        keySelect = [true,6];
      }
      if(mouseX > 750 && mouseX < 850 && mouseY > 250 && mouseY < 350 && mouseIsPressed){
        keySelect = [true,7];
      }
      if(keySelect[0] === true){
        fill(0,0,0,90);
        rect(0,0,900,500);
        fill(255,255,255);
        text("Type any key\n(Escape to cancel)",450,250);
      }
    }//Settings
    if(menu === 2){//character select
      backButton();
          
          //Lives
          fill(200, 100, 100, 150);
          rect(15, 45, 200, 40);
          fill(255);
          textSize(30);
          text("Lives: "+allPlayerStock, 120, 65);
          triangle(30, 55, 30, 75, 20, 65);
          triangle(200, 55, 200, 75, 210, 65);
          
      fill(90,90,90);
      for(var i = 0;i < 15;i ++){
        rect((i % 5)*90 + 230,(i % 3)*90,80,80,10);
      }
          if(unlockedRichard) {
              rect(100,150,80,80,10);
              image(richardPic, 101, 151, 78, 78);
          }
      image(fawfulPic,237,5,67,72);
      image(quotePic,325,2);
      image(floweyPic,411,1,78,78);
      image(glitchPic,501,1,78,78);
      image(sansPic,591,1,78,78);
      image(balosPic,231,91,78,78);
          image(linkPic,321,91,78,78);
          image(randomPic, 411, 91, 78, 78);
          image(toadPic, 501, 91, 78, 78);
          image(egaddPic, 601, 91, 58, 78);
          image(badeline0, 241, 181, 58, 78);
          image(groudonPic, 321, 181, 78, 78);
          image(shaggyPic, 411, 181, 78, 78);
      
          
      /*if(choose.one.x > 230 && choose.one.x < 310 && choose.one.y < 80){
        player[0].character = new Character(fawfulPic);
      }else{
        if(choose.one.x > 320 && choose.one.x < 400 && choose.one.y < 80){
          player[0].character = new Character(quotePic);
        }else{
          if(choose.one.x > 410 && choose.one.x < 490 && choose.one.y < 80){
            player[0].character = new Character(floweyPic);
          }else{
            if(choose.one.x > 500 && choose.one.x < 580 && choose.one.y < 80){
              player[0].character = new Character(glitchPic);
            }else{
              if(choose.one.x > 590 && choose.one.x < 670 && choose.one.y < 80){
                player[0].character = new Character(sansPic);
                }else{
                if(choose.one.x > 230 && choose.one.x < 310 && choose.one.y > 90 && choose.one.y < 170){
                  player[0].character = new Character(balosPic);
                } else{
                                  if(choose.one.x > 320 && choose.one.x < 400 && choose.one.y > 90 && choose.one.y < 170){
                                      player[0].character = new Character(linkPic);
                                  } else {
                                      if(choose.one.x > 410 && choose.one.x < 490 && choose.one.y > 90 && choose.one.y < 170) {
                                          player[0].character = new Character(randomPic);
                                      } else {
                                          if(choose.one.x > 501 && choose.one.x < 581 && choose.one.y > 90 && choose.one.y < 170) {
                                              player[0].character = new Character(toadPic);
                                          }
                                      }
                                  }
                              }
              }
            }
          }
        }
      }
      
      if(choose.two.x > 230 && choose.two.x < 310 && choose.two.y < 80){
        player[1].character = new Character(fawfulPic);
      }else{
        if(choose.two.x > 320 && choose.two.x < 400 && choose.two.y < 80){
          player[1].character = new Character(quotePic);
        }else{
          if(choose.two.x > 410 && choose.two.x < 490 && choose.two.y < 80){
            player[1].character = new Character(floweyPic);
          }else{
            if(choose.two.x > 500 && choose.two.x < 580 && choose.two.y < 80){
              player[1].character = new Character(glitchPic);
            }else{
              if(choose.two.x > 590 && choose.two.x < 670 && choose.two.y < 80){
                player[1].character = new Character(sansPic);
              }else{
                if(choose.two.x > 230 && choose.two.x < 310 && choose.two.y > 90 && choose.two.y < 170){
                  player[1].character = new Character(balosPic);
                } else{
                                  if(choose.two.x > 320 && choose.two.x < 400 && choose.two.y > 90 && choose.two.y < 170){
                                      player[1].character = new Character(linkPic);
                                  } else {
                                      if(choose.two.x > 410 && choose.two.x < 490 && choose.two.y > 90 && choose.two.y < 170) {
                                          player[1].character = new Character(randomPic);
                                      } else {
                                          if(choose.two.x > 501 && choose.two.x < 581 && choose.two.y > 90 && choose.two.y < 170) {
                                              player[1].character = new Character(toadPic);
                                          }
                                      }
                                  }
                              }
              }
            }
          }
        }
      }
      
      if(choose.three.x > 230 && choose.three.x < 310 && choose.three.y < 80){
        player[2].character = new Character(fawfulPic);
      }else{
        if(choose.three.x > 320 && choose.three.x < 400 && choose.three.y < 80){
          player[2].character = new Character(quotePic);
        }else{
          if(choose.three.x > 410 && choose.three.x < 490 && choose.three.y < 80){
            player[2].character = new Character(floweyPic);
          }else{
            if(choose.three.x > 500 && choose.three.x < 580 && choose.three.y < 80){
              player[2].character = new Character(glitchPic);
            }else{
              if(choose.three.x > 590 && choose.three.x < 670 && choose.three.y < 80){
                player[2].character = new Character(sansPic);
              }else{
                if(choose.three.x > 230 && choose.three.x < 310 && choose.three.y > 90 && choose.three.y < 170){
                  player[2].character = new Character(balosPic);
                } else{
                                  if(choose.three.x > 320 && choose.three.x < 400 && choose.three.y > 90 && choose.three.y < 170){
                                      player[2].character = new Character(linkPic);
                                  } else {
                                      if(choose.three.x > 410 && choose.three.x < 490 && choose.three.y > 90 && choose.three.y < 170) {
                                          player[2].character = new Character(randomPic);
                                      } else {
                                          if(choose.three.x > 501 && choose.three.x < 581 && choose.three.y > 90 && choose.three.y < 170) {
                                              player[2].character = new Character(toadPic);
                                          }
                                      }
                                  }
                              }
              }
            }
          }
        }
      }
      
      if(choose.four.x > 230 && choose.four.x < 310 && choose.four.y < 80){
        player[3].character = new Character(fawfulPic);
      }else{
        if(choose.four.x > 320 && choose.four.x < 400 && choose.four.y < 80){
          player[3].character = new Character(quotePic);
        }else{
          if(choose.four.x > 410 && choose.four.x < 490 && choose.four.y < 80){
            player[3].character = new Character(floweyPic);
          }else{
            if(choose.four.x > 500 && choose.four.x < 580 && choose.four.y < 80){
              player[3].character = new Character(glitchPic);
            }else{
              if(choose.four.x > 590 && choose.four.x < 670 && choose.four.y < 80){
                player[3].character = new Character(sansPic);
              }else{
                if(choose.four.x > 230 && choose.four.x < 310 && choose.four.y > 90 && choose.four.y < 170){
                  player[3].character = new Character(balosPic);
                } else{
                                  if(choose.four.x > 320 && choose.four.x < 400 && choose.four.y > 90 && choose.four.y < 170){
                                      player[3].character = new Character(linkPic);
                                  } else {
                                      if(choose.four.x > 410 && choose.four.x < 490 && choose.four.y > 90 && choose.four.y < 170) {
                                          player[3].character = new Character(randomPic);
                                      } else {
                                          if(choose.four.x > 501 && choose.four.x < 581 && choose.four.y > 90 && choose.four.y < 170) {
                                              player[3].character = new Character(toadPic);
                                          }
                                      }
                                  }
                              }
              }
            }
          }
        }
      }*/
      rect(20,290,200,200,10);
      rect(240,290,200,200,10);
      rect(460,290,200,200,10);
      rect(680,290,200,200,10);
      picCount = 0;
      if(player[0].character.pic !== undefined){
        image(player[0].character.pic,21,291,198,198);
        picCount ++;
      }
      
      if(player[1].character.pic !== undefined){
        image(player[1].character.pic,241,291,198,198);
        picCount ++;
      }
      
      if(player[2].character.pic !== undefined){
        image(player[2].character.pic,461,291,198,198);
        picCount ++;
      }
      
      if(player[3].character.pic !== undefined){
        image(player[3].character.pic,681,291,198,198);
        picCount ++;
      }
      rect(20,440,200,150,10);
      rect(240,440,200,150,10);
      rect(460,440,200,150,10);
      rect(680,440,200,150,10);
      //fill(220,130,130);//team
          player[0].team.fill();
      textSize(30);
      if(player[0].cpu === false){
        text("Player 1",120,470);
      }else{
        text("CPU 1",120,470);
      }
      //fill(130,130,220);//team
          player[1].team.fill();
      if(player[1].cpu === false){
        text("Player 2",340,470);
      }else{
        text("CPU 2",340,470);
      }
      //fill(130,220,130);
          player[2].team.fill();
      if(player[2].cpu === false){
        text("Player 3",560,470);
      }else{
        text("CPU 3",560,470);
      }
      //fill(220,130,220);//team
          player[3].team.fill();
      if(player[3].cpu === false){
        text("Player 4",780,470);
      }else{
        text("CPU 4",780,470);
      }
          if(!mouseIsPressed) {
          choose.place = false;
          }
      //fill(220,130,130);
          /*player[0].team.fill();
      ellipse(choose.one.x,choose.one.y,50,50);//
          fill(255);
          text(1, choose.one.x, choose.one.y);
      if(dist(mouseX,mouseY,choose.one.x,choose.one.y) < 25 && mouseIsPressed && choose.place === false){
              choose.one.follow = true;
        choose.place = true;
      }
          if(!mouseIsPressed) {
              choose.one.follow = false;
          }
          if(choose.one.follow) {
              choose.one.x = mouseX;
        choose.one.y = mouseY;
          }
      if(keys[controls[0].up]){
        choose.one.y -= 3;
      }
      if(keys[controls[0].down]){
        choose.one.y += 3;
      }
      if(keys[controls[0].left]){
        choose.one.x -= 3;
      }
      if(keys[controls[0].right]){
        choose.one.x += 3;
      }//
      choose.one.x = constrain(choose.one.x,25,875);
      choose.two.x = constrain(choose.two.x,25,875);
      choose.three.x = constrain(choose.three.x,25,875);
      choose.four.x = constrain(choose.four.x,25,875);
      choose.one.y = constrain(choose.one.y,25,475);
      choose.two.y = constrain(choose.two.y,25,475);
      choose.three.y = constrain(choose.three.y,25,475);
      choose.four.y = constrain(choose.four.y,25,475);
      //fill(130,130,220);
          player[1].team.fill();
      ellipse(choose.two.x,choose.two.y,50,50);//
          fill(255);
          text(2, choose.two.x, choose.two.y);
      if(dist(mouseX,mouseY,choose.two.x,choose.two.y) < 25 && mouseIsPressed && choose.place === false){
              choose.two.follow = true;
        choose.place = true;
      }
          if(!mouseIsPressed) {
              choose.two.follow = false;
          }
          if(choose.two.follow) {
              choose.two.x = mouseX;
        choose.two.y = mouseY;
          }
      if(keys[controls[1].up]){
        choose.two.y -= 3;
      }
      if(keys[controls[1].down]){
        choose.two.y += 3;
      }
      if(keys[controls[1].left]){
        choose.two.x -= 3;
      }
      if(keys[controls[1].right]){
        choose.two.x += 3;
      }//
      //fill(130,220,130);
          player[2].team.fill();
      ellipse(choose.three.x,choose.three.y,50,50);//
          fill(255);
          text(3, choose.three.x, choose.three.y);
      if(dist(mouseX,mouseY,choose.three.x,choose.three.y) < 25 && mouseIsPressed && choose.place === false){
              choose.three.follow = true;
        choose.place = true;
      }
          if(!mouseIsPressed) {
              choose.three.follow = false;
          }
          if(choose.three.follow) {
              choose.three.x = mouseX;
        choose.three.y = mouseY;
          }
      if(keys[controls[2].up]){
        choose.three.y -= 3;
      }
      if(keys[controls[2].down]){
        choose.three.y += 3;
      }
      if(keys[controls[2].left]){
        choose.three.x -= 3;
      }
      if(keys[controls[2].right]){
        choose.three.x += 3;
      }//
      //fill(220,130,220);
          player[3].team.fill();
      ellipse(choose.four.x,choose.four.y,50,50);//
          fill(255);
          text(4, choose.four.x, choose.four.y);
      if(dist(mouseX,mouseY,choose.four.x,choose.four.y) < 25 && mouseIsPressed && choose.place === false){
              choose.four.follow = true;
        choose.place = true;
      }
          if(!mouseIsPressed) {
              choose.four.follow = false;
          }
          if(choose.four.follow) {
              choose.four.x = mouseX;
        choose.four.y = mouseY;
          }
      if(keys[controls[3].up]){
        choose.four.y -= 3;
      }
      if(keys[controls[3].down]){
        choose.four.y += 3;
      }
      if(keys[controls[3].left]){
        choose.four.x -= 3;
      }
      if(keys[controls[3].right]){
        choose.four.x += 3;
      }*/
          for(var i = 0;i < choose.p.length;i ++) {
              player[i].team.fill();
              ellipse(choose.p[i].x,choose.p[i].y,50,50);//
              fill(255);
              text(i+1, choose.p[i].x, choose.p[i].y);
              if(dist(mouseX,mouseY,choose.p[i].x,choose.p[i].y) < 25 && mouseIsPressed && choose.place === false){
                  choose.p[i].follow = true;
                  choose.place = true;
              }
              if(!mouseIsPressed) {
                  choose.p[i].follow = false;
              }
              if(choose.p[i].follow) {
                  choose.p[i].x = mouseX;
                  choose.p[i].y = mouseY;
              }
              if(!mobileControls.active) {
                  if(keys[controls[i].up]){
                      choose.p[i].y -= 3;
                  }
                  if(keys[controls[i].down]){
                      choose.p[i].y += 3;
                  }
                  if(keys[controls[i].left]){
                      choose.p[i].x -= 3;
                  }
                  if(keys[controls[i].right]){
                      choose.p[i].x += 3;
                  }//
              }
              choose.p[i].x = constrain(choose.p[i].x, 25, 875);
              choose.p[i].y = constrain(choose.p[i].y, 25, 475);
              
              if(choose.p[i].x < 30 && choose.p[i].y < 30 && developerMode) {
                  player[i].character = new Character(choochooPic);
              }
  
              if(choose.p[i].x > 230 && choose.p[i].x < 310 && choose.p[i].y < 80){
                  player[i].character = new Character(fawfulPic);
              }else{
                  if(choose.p[i].x > 320 && choose.p[i].x < 400 && choose.p[i].y < 80){
                      player[i].character = new Character(quotePic);
                  }else{
                      if(choose.p[i].x > 410 && choose.p[i].x < 490 && choose.p[i].y < 80){
                          player[i].character = new Character(floweyPic);
                      }else{
                          if(choose.p[i].x > 500 && choose.p[i].x < 580 && choose.p[i].y < 80){
                              player[i].character = new Character(glitchPic);
                          }else{
                              if(choose.p[i].x > 590 && choose.p[i].x < 670 && choose.p[i].y < 80){
                                  player[i].character = new Character(sansPic);
                              }else{
                                  if(choose.p[i].x > 230 && choose.p[i].x < 310 && choose.p[i].y > 90 && choose.p[i].y < 170){
                                      player[i].character = new Character(balosPic);
                                  } else{
                                      if(choose.p[i].x > 320 && choose.p[i].x < 400 && choose.p[i].y > 90 && choose.p[i].y < 170){
                                          player[i].character = new Character(linkPic);
                                      } else {
                                          if(choose.p[i].x > 410 && choose.p[i].x < 490 && choose.p[i].y > 90 && choose.p[i].y < 170) {
                                              player[i].character = new Character(randomPic);
                                          } else {
                                              if(choose.p[i].x > 500 && choose.p[i].x < 580 && choose.p[i].y > 90 && choose.p[i].y < 170) {
                                                  player[i].character = new Character(toadPic);
                                              } else {
                                                  if(choose.p[i].x > 590 && choose.p[i].x < 670 && choose.p[i].y > 90 && choose.p[i].y < 170) {
                                                      player[i].character = new Character(egaddPic);
                                                  } else {
                                                      if(choose.p[i].x > 230 && choose.p[i].x < 310 && choose.p[i].y > 180 && choose.p[i].y < 260) {
                                                          player[i].character = new Character(badelinePic);
                                                      } else {
                                                          if(choose.p[i].x > 320 && choose.p[i].x < 400 && choose.p[i].y > 180 && choose.p[i].y < 260) {
                                                              player[i].character = new Character(groudonPic);
                                                          } else {
                                                              if(choose.p[i].x > 410 && choose.p[i].x < 490 && choose.p[i].y > 180 && choose.p[i].y < 260) {
                                                                  player[i].character = new Character(shaggyPic);
                                                              } else {
                                                                  if(choose.p[i].x > 500 && choose.p[i].x < 580 && choose.p[i].y > 180 && choose.p[i].y < 260) {
                                                                      player[i].character = new Character(undefined);//I don't know yet
                                                                  } else {
                                                                      if(choose.p[i].x > 590 && choose.p[i].x < 670 && choose.p[i].y > 180 && choose.p[i].y < 260) {
                                                                          player[i].character = new Character(undefined);//I don't know yet
                                                                      } else {
                                                                          player[i].character = new Character(undefined);//No character
                                                                      }
                                                                  }
                                                              }
                                                          }
                                                      }
                                                  }
                                              }
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
              if(choose.p[i].x < 30 && choose.p[i].y < 30 && developerMode) {
                  player[i].character = new Character(choochooPic);
              }
              if(unlockedRichard && choose.p[i].x > 100 && choose.p[i].x < 180 && choose.p[i].y > 150 && choose.p[i].y < 230) {
                  player[i].character = new Character(richardPic);
              }
          }
      if(picCount > 1){
        fill(180,130,50,150);
        rect(0,220,900,60,5);
              if(mobileControls.active)
                  ellipse(750, 150, 80, 80);
        fill(180,50,50,150);
        rect(10,225,880,50,5);
              if(mobileControls.active)
                  ellipse(750, 150, 60, 60);
        fill(0,0,0,200);
        text("Press attack to fight!",450,250);
              if(mobileControls.active)
                  text("Fight!", 750, 150);
              if(dist(mouseX, mouseY, 750, 150) < 40 && mouseIsPressed && mobileControls.active) {
                  menu = 6;
              }
              /*teams = [player[0].team];*/
        for(var i = 0;i < player.length;i ++){
                  /*for(var u = 0;u < teams.length;u ++) {
                      if(!player[i].team.equals(teams[u]) && player[i].character.pic !== undefined) {
                          teams.push(player[i].team);
                      }
                  }*/
          if(player[i].character.pic !== undefined && keys[controls[i].attack]/* && teams.length > 1*/){
            menu = 6;
          }
        }
      }
    }//Character select
    if(menu === 4){//actually in the battle
      fill(200);
      rect(-1,-1,902,502);
      if(pause === false){
              if(!Music.main.isPlaying()) {
                  Music.main.loop();
              }
              
              mobileControls.controls();
              
        trans.x = 0;
        trans.y = 0;
        trans.count = 0;
              for(var p = 0;p < player.length;p ++) {
                  if(player[p].character.pic !== undefined && player[p].alive){
                      trans.count ++;
                      trans.x += player[p].x;
                      trans.y += player[p].y;
                      if(player[p].x > 350/trans.scale){
                          trans.scale -= 0.008;
                      }else {
                          if(player[p].x < -350/trans.scale){
                              trans.scale -= 0.008;
                          }else {
                              if(player[p].x < 100/trans.scale && player[p].x > -100/trans.scale){
                                  trans.scale += 0.002;
                              }
                          }
                      }
                  }
              }
              if(keys[27]) {
                  pause = true;
              }
        push();
        translate(450 - (trans.x)/trans.count,250 - (trans.y)/(trans.count));
        push();
        scale(constrain(trans.scale*(9/10), 0.2, 1.5));
        arena.formArena();
        imageMode(CENTER);
              
              teamCount = 0;
        picCount = 0;
        for(var i = 0;i < player.length;i ++){
                  if(player[i].character.pic !== undefined && player[i].alive && player[i].smash > 0){
                      player[i].character.finalSmash(i);
                  }
                  if(player[i].smash <= 0) {
                      player[i].smashing = false;
                  }
                  if(!player[i].cpu) {
                      if(player[i].character.pic !== undefined && player[i].alive){
                          if(player[i].character.pic === linkPic && hacked) {
                              player[i].damage = 0;
                          }
                          
                          if(player[i].inv > 0){
                              player[i].inv --;
                          }
                          
                          addPic = true;
                          for(var p = 0;p < i;p ++) {
                              if(player[i].team.equals(player[p].team) && player[p].alive && player[p].character.pic !== undefined) {
                                  addPic = false;
                              }
                          }
                          if(addPic) {//turns picCount into team count 
                              teamCount ++;
                          }
                          picCount ++;
                          
                          if(player[i].inv < 1 || player[i].inv % 2 === 0){
                              if(player[i].character.pic !== shaggyPic) {
                                  player[i].character.animation.draw(player[i].x, player[i].y, player[i].width(), player[i].height());//, 50, 60
                              } else {
                                  shaggyAnimate(i);
                              }
                              //image(player[i].character.pic,player[i].x,player[i].y,50,60);
                          }
                          /*if(i === 0){
                              fill(220,130,130);
                          }
                          if(i === 1){
                              fill(130,130,220);
                          }
                          if(i === 2){
                              fill(130,220,130);
                          }
                          if(i === 3){
                              fill(220,130,220);
                          }*/
                          player[i].team.fill();
                          textSize(25);
                          if(!player[i].cpu) {
                              text("Player " + (i + 1),player[i].x,player[i].y - 40);
                          } else {
                              text("CPU " + (i + 1),player[i].x,player[i].y - 40);
                          }
  
                          if(player[i].shield) {
                              for(var s = 0;s < 50;s += 3) {
                                  fill(255 - (4*player[i].shieldNum), 50, 55 + (4*player[i].shieldNum), 10 + s + (frameCount % 50));
                                  ellipse(player[i].x, player[i].y, 50-s, 50-s);
                              }
                          }
  
                          if(player[i].xVel > 0){
                                  player[i].xVel = floor(player[i].xVel*100)/110;
                          }else{
                                  player[i].xVel = ceil(player[i].xVel*100)/110;
                          }
                          for(var p = 0;p < 20;p ++) {
                              player[i].x += player[i].xVel/20;
                              player[i].y += player[i].yVel/20;
                              arena.collide(i);
                          }
                          if(keys[controls[i].right] && player[i].attacking === false && player[i].xVel < 2.5 && !player[i].shield){
                              player[i].xVel ++;
                              if(player[i].character.pic === shaggyPic && player[i].character.charge > 0) {
                                  player[i].xVel += 6;
                              }
                              player[i].dir = 1;
                          }
                          if(keys[controls[i].left] && player[i].attacking === false && player[i].xVel > -2.5 && !player[i].shield){
                              player[i].xVel --;
                              if(player[i].character.pic === shaggyPic && player[i].character.charge > 0) {
                                  player[i].xVel -= 6;
                              }
                              player[i].dir = 2;
                          }
                          
                          if(keys[controls[i].up] && player[i].attacking === false && !player[i].shield){
                              player[i].look = 1;
                          }
                          if(keys[controls[i].down] && player[i].attacking === false && !player[i].shield){
                              player[i].look = 2;
                          }
                          if(!keys[controls[i].down] && !keys[controls[i].up]) {
                              player[i].look = 0;
                          }
                          
                          if(keys[controls[i].shield] && player[i].shieldNum > 40) {
                              player[i].shield = true;
                          }
                          
                          if(player[i].shield && frameCount % 2 === 0) {
                              player[i].shieldNum --;
                          }
                          
                          if(!keys[controls[i].shield] || player[i].shieldNum <= 0) {
                              player[i].shield = false;
                          }
                          
                          if(!player[i].shield && player[i].shieldNum < 200 && frameCount % 3 === 0) {
                              player[i].shieldNum ++;
                          }
                          
                          if(keys[controls[i].left]) {
                              if(!player[i].shield) {
                                  player[i].character.animation.move(2);
                              }
                          } else {
                              if(keys[controls[i].right] && !player[i].shield) {
                                  player[i].character.animation.move(0);
                              }
                          }
                          
                          if(player[i].dir === 1) {//Makes the animation face the same way as the character
                              player[i].character.animation.dir = 0;
                          }
                          if(player[i].dir === 2) {//Makes the animation face the same way as the character
                              player[i].character.animation.dir = 2;
                          }
  
                          if(!keys[controls[i].left] && !keys[controls[i].right]) {
                              player[i].character.animation.reset();
                          }
  
                          if(player[i].shield) {
                              player[i].character.animation.reset();
                          }
  
                          if(keys[controls[i].pause]){
                              pause = true;
                          }
  
                          if(!player[i].ground) {
                              player[i].yVel += 0.4;
                          }
                          //collisions with the world
                          /*if(!(player[i].x > -250 && player[i].x < 250 && player[i].y > -30 && player[i].y < 225)){
                              if(player[i].jump && keys[controls[i].up] && player[i].yVel > -2 && player[i].attacking === false && !player[i].shield){
                                  player[i].yVel = -7;
                                  player[i].jump = false;
                              }
                          }
                          if(player[i].x > -250 && player[i].x < 250 && player[i].y > -30 && player[i].y < 225){
                              player[i].airSpecial = true;
                              player[i].jump = true;
                              player[i].yVel = -0.7;
                              if(player[i].y + player[i].yVel <= -30){
                                  player[i].yVel = 0;
                              }
                              if(keys[controls[i].up] && player[i].attacking === false && !player[i].shield){
                                  player[i].yVel -= 7;
                              }
                          }
                          if(player[i].y > -20 && player[i].y < 215){
                              if(player[i].x > -255 && player[i].x < -230){
                                  player[i].xVel = -1;
                              }
                              if(player[i].x < 255 && player[i].x > 230){
                                  player[i].xVel = 1;
                              }
                          }
                          if(player[i].y > 170 && player[i].x > -250 && player[i].x < 250 && player[i].y < 225){
                              player[i].yVel = 5;
                          }*/
                          if(player[i].y > 750 || player[i].x < -1000 || player[i].x > 1000 || player[i].y < -900){
                              player[i].lives --;
                              if(player[i].lives < 1) {
                                  player[i].alive = false;
                              }
                              player[i].damage = 0;
                              player[i].inv = 50;
                              player[i].shieldNum = 200;
                              player[i].x = arena.spawn[i].x;
                              player[i].y = arena.spawn[i].y;
                              player[i].yVel = 0;
                              player[i].xVel = 0;
                          }
                          if(keys[controls[i].attack] && !player[i].attacking && !player[i].shield){
                              player[i].character.attack(i);
                          }
                          if(keys[controls[i].special] && !player[i].attacking && !player[i].shield) {
                              player[i].character.special(i);
                          }
                          for(var u = 0;u < attack.length;u ++){
                              if(i === attack[u].player){
                                  //player[i].attacking = true;
                              }
                              fill(0,0,0);
                              if(attack[u].player === i) {
                                  attack[u].time -= 4;
                                  drawAttack(u);
                              }
                              if(attack[u].x + attack[u].w > player[i].x - 25 && attack[u].x < player[i].x + 25 && attack[u].y + attack[u].h > player[i].y - 30 && attack[u].y < player[i].y + 30){
                                  if(player[i].x >= attack[u].x + attack[u].w/2 && i !== attack[u].player && !player[i].team.equals(player[attack[u].player].team)){
                                      if(player[i].inv < 1 && (attack[u].w !== 0 && attack[u].h !== 0)){
                                          if(!player[i].shield) {
                                              player[i].damage += attack[u].damage;
                                              player[i].xVel += player[i].damage *(3/2)* abs(attack[u].launch) * player[i].character.launch/2;
                                              player[i].yVel -= player[i].damage *(2/3)* attack[u].launch * player[i].character.launch/2;
                                          } else {
                                              player[i].damage += ceil(attack[u].damage / 3);
                                              player[i].shieldNum -= 3 * attack[u].damage;
                                              player[i].xVel += player[i].damage *(3/2)* abs(attack[u].launch) * player[i].character.launch/5;
                                              player[i].yVel -= player[i].damage *(2/3)* attack[u].launch * player[i].character.launch/5;
                                          }
                                          if(pierce(u)) {
                                              attack[u].time = 0;
                                          }
                                          player[i].inv = player[attack[u].player].character.inv;
                                          player[attack[u].player].character.charge = 0;
                                      }
                                  }else{
                                      if(player[i].x < attack[u].x + attack[u].w/2 && i !== attack[u].player && !player[i].team.equals(player[attack[u].player].team)){
                                          if(player[i].inv < 1 && (attack[u].w !== 0 && attack[u].h !== 0)){
                                              if(!player[i].shield) {
                                                  player[i].damage += attack[u].damage;
                                                  player[i].xVel -= player[i].damage *(3/2)* abs(attack[u].launch) * player[i].character.launch/2;
                                                  player[i].yVel -= player[i].damage *(2/3)* attack[u].launch * player[i].character.launch/2;
                                              } else {
                                                  player[i].damage += ceil(attack[u].damage / 3);
                                                  player[i].shieldNum -= 3 * attack[u].damage;
                                                  player[i].xVel -= player[i].damage *(3/2)* abs(attack[u].launch) * player[i].character.launch/5;
                                                  player[i].yVel -= player[i].damage *(2/3)* attack[u].launch * player[i].character.launch/5;
                                              }
                                              if(pierce(u)) {
                                                  attack[u].time = 0;
                                              }
                                              player[i].inv = player[attack[u].player].character.inv;
                                              player[attack[u].player].character.charge = 0;
                                          }
                                      }
                                  }
                              }
                              
                              playAttack(u, i);//Runs the attacks
  
                              if(attack[u].time <= 0){
                                  if(attack[u].type !== "glow") {
                                      player[attack[u].player].attacking = false;
                                  }
                                  player[attack[u].player].character.charge = 0;
                                  if(player[attack[u].player].character.pic === shaggyPic) {
                                      player[attack[u].player].character.anim = 0;
                                  }
                                  attack.splice(u,1);
                              }
                          }
                      }
                  }//!cpu if statement
                  if(player[i].cpu && player[i].alive) {
                      ai.run(i);
                      ai.calculate(i);
                  }//cpu
        }
              imageMode(CORNER);
              for(var i = items.length-1;i >= 0;i --) {
                  items[i].draw();
                  items[i].run();
                  for(var u = 0;u < attack.length;u ++) {
                      if(items[i].inv < 1 && attack[u].x + attack[u].w > items[i].x && attack[u].x < items[i].x + 50 && attack[u].y + attack[u].h > items[i].y && attack[u].y < items[i].y + 50) {
                          items[i].damage += attack[u].damage;
                          items[i].inv = player[attack[u].player].character.inv;
                          if(attack[u].x > items[i].x + 25) {
                              items[i].xVel -= items[i].damage *(3/2)* attack[u].launch;
                              items[i].yVel -= items[i].damage *(2/3)* attack[u].launch;
                          } else {
                              items[i].xVel += items[i].damage *(3/2)* attack[u].launch;
                              items[i].yVel += items[i].damage *(2/3)* attack[u].launch;
                          }
                          if(items[i].damage > 20) {
                              items.splice(i, 1);
                              player[attack[u].player].smash = player[attack[u].player].smashL();
                              u = attack.length;
                          }
                      }
                  }
              }
              if(random(0, 1000) > 998 && items.length < 1) {
                  items.push(new Item(0, -80, smashB));
              }
              imageMode(CENTER);
              arena.draw();
              imageMode(CORNER);
        pop();
        pop();
              
              for(var i = 0;i < player.length;i ++) {
                  if(player[i].character.pic === floweyPic && player[i].smash > 0) {
                      tint(255, 50);
                      floweyMega.draw(floor(frameCount/5), 0, 0);
                      tint(255, 255);
                  }
              }
              
              mobileControls.draw();
        
        textSize(18);
              playersDown = 0;
        for(var i = 0;i < player.length;i ++){
                  if(player[i].character.pic != undefined && player[i].alive) {
                      /*if(i === 0){
                          fill(220,130,130,200);
                      }
                      if(i === 1){
                          fill(130,130,220,200);
                      }
                      if(i === 2){
                          fill(130,220,130,200);
                      }
                      if(i === 3){
                          fill(220,130,220,200);
                      }*/
                      player[i].team.fill();
                      rect((i-playersDown) * 900/picCount,450,900/picCount,50,10);
                      fill(50 + (player[i].damage * 2),50 - player[i].damage,50 - player[i].damage,200);
                      if(!player[i].cpu) {
                          text("Player " + (i + 1),(i-playersDown) * 900/picCount + (900/picCount)/2,460);
                      } else {
                          text("CPU " + (i + 1),(i-playersDown) * 900/picCount + (900/picCount)/2,460);
                      }
                      text(round(player[i].damage) + "%",(i-playersDown) * 900/picCount + (900/picCount)/2,475);
                      text("Lives " + player[i].lives,(i-playersDown) * 900/picCount + (900/picCount)/2,490);
                  } else {
                      playersDown ++;
                  }
        }
              if(teamCount <= 1) {
                  menu = 5;
                  for(var i = 0;i < player.length;i ++) {
                      if(player[i].alive && player[i].character.pic != undefined) {
                          winner = player[i].team;
                      }
                  }
              }
      }
      if(pause === true){
              if(Music.main.isPlaying) {
                  Music.main.stop();
              }
        fill(100,100,100,200);
        ellipse(350,350,100,100);
        ellipse(550,350,100,100);
        fill(50,50,50,230);
        textSize(70);
        text("Paused",450,200);
        textSize(20);
        text("Exit",350,350);
        text("Unpause",550,350);
        if(dist(mouseX,mouseY,350,350) <= 50 && mouseIsPressed){
          pause = false;
          menu = 0;
                  fire = [];
        }
        if(dist(mouseX,mouseY,550,350) <= 50 && mouseIsPressed){
          pause = false;
        }
      }
    }//In battle
      if(menu === 5){//After a battle
          background(0);
          textSize(20);
          fill(255, 255, 255);
          winnerCount = 0;
          for(var i = 0;i < player.length;i ++) {
              if(player[i].team.equals(winner)) {
                  winnerCount ++;
              }
          }
          playersDown = 0;
          for(var i = 0;i < player.length;i ++) {
              if(player[i].team.equals(winner) && player[i].character.pic != undefined) {
                  text(player[i].name() + " Wins!", 450+150*(i-playersDown)-75*(winnerCount-1), 100);
                  if(!player[i].cpu) {
                      text("Player " + (i+1), 450+150*(i-playersDown)-75*(winnerCount-1), 150);
                  } else {
                      text("CPU " + (i+1), 450+150*(i-playersDown)-75*(winnerCount-1), 150);
                  }
                  image(player[i].character.pic, 400+150*(i-playersDown)-75*(winnerCount-1), 190, 100, 120);
              } else {
                  playersDown ++;
              }
          }
          playersDown = 0;
          for(var i = 0;i < player.length;i ++) {
              if(player[i].character.pic != undefined && !player[i].team.equals(winner)) {
                  image(player[i].character.pic, 460 + 60*(i-playersDown), 330, 50, 60);
              } else {
                  playersDown ++;
              }
          }
          textSize(25);
          text("Click to continue", 450, 400);
      }//After a battle
      if(menu === 6){//Arena select
          arenaBackButton();
          
          for(var i = 0;i < 5;i ++) {
              for(var u = 0;u < 4;u ++) {
                  fill(100);
                  rect(265+i * 75, u * 75 + 50, 70, 70, 10);
                  textSize(17);
                  fill(255);
                  text(setArena(5*u+i), 302+i*75, 87+u*75);
                  if(mouseX > 265+i*75 && mouseX < 335+i*75 && mouseY > 50+u*75 && mouseY < 120+u*75) {
                      arena = new Arena(setArena(5*u + i));
                      if(mouseIsPressed) {
                          menu = 4;
                          Music.theme.stop();
                          Music.intro.stop();
                      }
                      arena.formArena();
                      for(var p = 0;p < player.length;p ++) {
                          player[p].damage = 0;
                          player[p].inv = 50;
                          player[p].shieldNum = 200;
                          player[p].x = arena.spawn[p].x;
                          player[p].y = arena.spawn[p].y;
                          player[p].yVel = 0;
                          player[p].xVel = 0;
                      }
                  }
              }
          }
          
          fill(255);
          textSize(50);
          text("Arena: " + arena.name, 450, 400);
      }//Arena select
      //menu=6;
    /*stroke(255,255,255);
    line(450,0,450,500);//debug
    line(0,250,900,250);//debug
    noStroke();*/
    /*if(keys[controls[0].up]){
      background(50,50,100);
    }*/
    /*stroke(0,0,0);
    strokeWeight(2);
    line(0,0,0,500);
    line(0,500,900,500);
    line(900,500,900,0);
    strokeWeight(1);
    line(900,0,0,0);
    noStroke();*/
  }
  
  function mouseClicked(){
    if(menu === 2 && choose.place === false) {
          if(mouseX > 15 && mouseX < 55 && mouseY > 45 && mouseY < 85 && allPlayerStock > 1) {
              allPlayerStock --;
              for(var i = 0;i < player.length;i ++) {
                  player[i].resetLives();
              }
          }
          if(mouseX > 175 && mouseX < 215 && mouseY > 45 && mouseY < 85 && allPlayerStock < 99) {
              allPlayerStock ++;
              for(var i = 0;i < player.length;i ++) {
                  player[i].resetLives();
              }
          }
      if(mouseX > 20 && mouseX < 220 && mouseY > 290 && mouseY < 440){
        if(player[0].cpu === true){
          player[0].cpu = false;
        }else{
          player[0].cpu = true;
        }
      }
          if(mouseX > 20 && mouseX < 220 && mouseY > 440) {
              player[0].team = player[0].team.nextColor();
          }
      if(mouseX > 240 && mouseX < 440 && mouseY > 290 && mouseY < 440){
        if(player[1].cpu === true){
          player[1].cpu = false;
        }else{
          player[1].cpu = true;
        }
      }
          if(mouseX > 240 && mouseX < 440 && mouseY > 440) {
              player[1].team = player[1].team.nextColor();
          }
      if(mouseX > 460 && mouseX < 660 && mouseY > 290 && mouseY < 440){
        if(player[2].cpu === true){
          player[2].cpu = false;
        }else{
          player[2].cpu = true;
        }
      }
          if(mouseX > 460 && mouseX < 660 && mouseY > 440) {
              player[2].team = player[2].team.nextColor();
          }
      if(mouseX > 680 && mouseX < 880 && mouseY > 290 && mouseY < 440){
        if(player[3].cpu === true){
          player[3].cpu = false;
        }else{
          player[3].cpu = true;
        }
      }
          if(mouseX > 680 && mouseX < 880 && mouseY > 440) {
              player[3].team = player[3].team.nextColor();
          }
    }
    if(menu === 0) {//Main menu
      if(dist(mouseX,mouseY,700,350) < 50 || (mouseX > 700 && mouseX < 850 && mouseY > 300 && mouseY < 400)){
        menu = 1;
        playerNum = 1;
      }
      if(dist(mouseX,mouseY,100,350) < 50 || (mouseX > 100 && mouseX < 250 && mouseY > 300 && mouseY < 400)){
        menu = 2;
              for(var i = 0;i < player.length;i ++) {
                  player[i].reset();
              }
        /*player = [
          new Player(0, 0, false, 0, 0, 0, 0, 1, false, 0, 3, true, true, new Character(undefined)),
                  new Player(0, 0, false, 0, 0, 0, 0, 1, false, 0, 3, true, true, new Character(undefined)),
                  new Player(0, 0, true, 0, 0, 0, 0, 1, false, 0, 3, true, true, new Character(undefined)),
                  new Player(0, 0, true, 0, 0, 0, 0, 1, false, 0, 3, true, true, new Character(undefined))
        ];*/
        choose = {
          place: true,
          p: [{
           x: 120,
           y: 380
          },
          {
            x: 340,
            y: 380
          },
          {
            x: 560,
            y: 380
          },
          {
            x: 780,
            y: 380
          }]
        }
      }
    }//Main menu
      if(menu === 5) {
          Music.intro.play();
          Music.theme.stop();
          menu = 0;
          fire = [];
      }//End of battle
      if(menu === 1) {
          if(dist(mouseX, mouseY, 800, 450) < 40) {
              if(mobileControls.active) {
                  mobileControls.active = false;
              } else {
                  mobileControls.active = true;
              }
          }
      }
  }
  
  function keyPressed(){
    keys[keyCode] = true;
  }
  
  function keyReleased(){
       keys[keyCode] = false;
    if(menu === 1){
      if(keySelect[0] === true){
        if(keySelect[1] === 0){
          controls[playerNum-1].up = keyCode;
          if(keyCode === 27){
            controls[playerNum-1].up = 254;
          }
        }
        if(keySelect[1] === 1){
          controls[playerNum-1].left = keyCode;
          if(keyCode === 27){
            controls[playerNum-1].left = 254;
          }
        }
        if(keySelect[1] === 2){
          controls[playerNum-1].down = keyCode;
          if(keyCode === 27){
            controls[playerNum-1].down = 254;
          }
        }
        if(keySelect[1] === 3){
          controls[playerNum-1].right = keyCode;
          if(keyCode === 27){
            controls[playerNum-1].right = 254;
          }
        }
        if(keySelect[1] === 4){
          controls[playerNum-1].attack = keyCode;
          if(keyCode === 27){
            controls[playerNum-1].attack = 254;
          }
        }
        if(keySelect[1] === 5){
          controls[playerNum-1].special = keyCode;
          if(keyCode === 27){
            controls[playerNum-1].special = 254;
          }
        }
        if(keySelect[1] === 6){
          controls[playerNum-1].shield = keyCode;
          if(keyCode === 27){
            controls[playerNum-1].shield = 254;
          }
        }
        if(keySelect[1] === 7){
          controls[playerNum-1].pause = keyCode;
          if(keyCode === 27){
            controls[playerNum-1].pause = 254;
          }
        }
        keySelect[0] = false;
      }
    }
  }