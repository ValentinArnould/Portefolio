$(document).ready(function () {
  //debugger;
  var taillecases = 60; //changer dans le css taille cases et taille border
  if (localStorage.getItem('gameState') == 'playScreen') {
    //$('.gameScreens').css('width','918px');
    //$('.gameScreens').css('height','632px');
  }
  function getRandNumber(max,min = 1) {
            return Math.floor((Math.random() * max) + min);
  }
  function checkPos(maxX, maxY) {
            var flag = false;
            while (!flag) {
              var x = getRandNumber(maxX);
              var y = getRandNumber(maxY);
              if ($('.gameDiv[data-x="' + x + '"][data-y="' + y + '"]').html() == '') {
                flag = true;
                return {
                  "x" : x,
                  "y" : y
                }
              }
            }
  }
  function init() {
            if (localStorage.getItem('gameState') == null) {
              //debugger;
              localStorage.setItem('gameState', 'optionScreen');
              displayScreen(localStorage.getItem('gameState'));
            } else {
              displayScreen(localStorage.getItem('gameState'));
            }
            if (localStorage.getItem('points') == null) {
              localStorage.setItem('points', 0);
            }
  }
  function displayScreen(gameState) {
            $.each($('section[data-state!="' + gameState + '"]'), function(key, value) {
              $(this).addClass('hidden');
            })
            $('section[data-state="' + gameState + '"]').removeClass('hidden');
            //debugger;
  }
  function Trap(playerPos) { //bloquer la position précédente du joueur

            $('body').find('.gameDiv[data-x="' + playerPos.x + '"][data-y="' + playerPos.y + '"]').addClass('mur');
  }
  function insertObjects() {
            var maxX = JSON.parse(localStorage.getItem('gameAxes')).x;
            var maxY = JSON.parse(localStorage.getItem('gameAxes')).y;
            if (localStorage.getItem('playerPos') == null) {
              var pos = {
                "x" : 1,
                "y" : 1
              };
              localStorage.setItem('playerPos', JSON.stringify(pos));
            };
            if (localStorage.getItem('goalPos') == null || localStorage.getItem('goalPos') == 'null') {
              var pos = checkPos(JSON.parse(localStorage.getItem('gameAxes')).x, JSON.parse(localStorage.getItem('gameAxes')).y);
              localStorage.setItem('goalPos', JSON.stringify(pos));
              //debugger;
            };
            if (localStorage.getItem('monsterPos') == null) {
              var pos = checkPos(JSON.parse(localStorage.getItem('gameAxes')).x, JSON.parse(localStorage.getItem('gameAxes')).y);
              localStorage.setItem('monsterPos', JSON.stringify(pos));
              //debugger;
            };

            var playerPos = JSON.parse(localStorage.getItem('playerPos'));
            var goalPos = JSON.parse(localStorage.getItem('goalPos'));
            var monsterPos = JSON.parse(localStorage.getItem('monsterPos'));
            $('.gameDiv[data-x="' + playerPos.x + '"][data-y="' + playerPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./pokerface.png">');
            $('.gameDiv[data-x="' + goalPos.x + '"][data-y="' + goalPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./Emerald.png">');
            $('.gameDiv[data-x="' + monsterPos.x + '"][data-y="' + monsterPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./slenderdoom.png">');
  };

  $('body').on('keydown', function(e) {
            if (e.keyCode == 38 /*up*/) {
              console.log('UP');
              movePlayer('up');
            } else if (e.keyCode == 40 /*down*/) {
              console.log('DOWN');
              movePlayer('down');
            } else if (e.keyCode == 37 /*left*/) {
              console.log('LEFT');
              movePlayer('left');
            } else if (e.keyCode == 39 /*right*/) {
              console.log('RIGHT');
              movePlayer('right');
            }
            moveMonster();
  });
  //ajouter slenderdoom
  //debugger;

  function checkVictory(currentPlayerPos) {
            if (currentPlayerPos.x == JSON.parse(localStorage.getItem('goalPos')).x && currentPlayerPos.y == JSON.parse(localStorage.getItem('goalPos')).y) {
              //displayScreen('victory');
              //debugger;
              localStorage.setItem('goalPos', 'null');
              var po = JSON.parse(localStorage.getItem('points')) + 1;
              localStorage.setItem('points', JSON.stringify(po));
              console.log(localStorage.getItem('points'));
            }
  }

  function movePlayer(direction) {
            var currentPlayerPos = JSON.parse(localStorage.getItem('playerPos'));
            var gameSize = JSON.parse(localStorage.getItem('gameAxes'));
            if (direction == 'up') {
              if ((currentPlayerPos.y - 1) > 0 || $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + (currentPlayerPos.y - 1) + '"]').hasClass('.mur') != true) { //tester si la case ou on va n'a pas la classe mur
              $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + currentPlayerPos.y + '"]').html('');
              Trap(currentPlayerPos);
              currentPlayerPos.y -= 1;
              $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + currentPlayerPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./pokerface.png">');
              checkVictory(currentPlayerPos);
              localStorage.setItem('playerPos', JSON.stringify(currentPlayerPos));
              insertObjects();
            } else {
              console.log('Aïe');
            }
          } else if (direction == 'down') {
            if ((currentPlayerPos.y - 1) < gameSize.y -1 || $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + (currentPlayerPos.y + 1) + '"]').hasClass('.mur') != true) {
              $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + currentPlayerPos.y + '"]').html('');
              Trap(currentPlayerPos);
              currentPlayerPos.y += 1;
              $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + currentPlayerPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./pokerface.png">');
              checkVictory(currentPlayerPos);
              localStorage.setItem('playerPos', JSON.stringify(currentPlayerPos));
              insertObjects();
            } else {
              console.log('Aïe');
            }
          } else if (direction == 'left') { //à finir de dev
            if ((currentPlayerPos.x - 1) > 0 || $('.gameDiv[data-x="' + (currentPlayerPos.x - 1) + '"][data-y="' + currentPlayerPos.y + '"]').hasClass('.mur') != true) {
              $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + currentPlayerPos.y + '"]').html('');
              Trap(currentPlayerPos);
              currentPlayerPos.x -= 1;
              $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + currentPlayerPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./pokerface.png">');
              checkVictory(currentPlayerPos);
              localStorage.setItem('playerPos', JSON.stringify(currentPlayerPos));
              insertObjects();
            } else {
              console.log('Aïe');
            }
          } else if (direction == 'right') {
            if ((currentPlayerPos.x - 1) < gameSize.x - 1 || $('.gameDiv[data-x="' + (currentPlayerPos.x + 1) + '"][data-y="' + currentPlayerPos.y - 1 + '"]').hasClass('.mur') != true) {
              $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + currentPlayerPos.y + '"]').html('');
              Trap(currentPlayerPos);
              currentPlayerPos.x += 1;
              $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + currentPlayerPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./pokerface.png">');
              checkVictory(currentPlayerPos);
              localStorage.setItem('playerPos', JSON.stringify(currentPlayerPos));
              insertObjects();
            } else {
              console.log('Aïe');
            }
          }
          //debugger;
  }

  function moveMonster() {
          var currentMonsterPos = JSON.parse(localStorage.getItem('monsterPos'));
          var currentPlayerPos = JSON.parse(localStorage.getItem('playerPos'));
          var gameSize = JSON.parse(localStorage.getItem('gameAxes'));
          if(getRandNumber(2) == 1) {
            if(getRandNumber(2) == 1) {
              if ((currentMonsterPos.y - 1) > 0) { //va en haut
                $('.gameDiv[data-x="' + currentMonsterPos.x + '"][data-y="' + currentMonsterPos.y + '"]').html('');
                currentMonsterPos.y -= 1;
                $('.gameDiv[data-x="' + currentMonsterPos.x + '"][data-y="' + currentMonsterPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./slenderdoom.png">');
                checkVictory(currentMonsterPos);
                localStorage.setItem('monsterPos', JSON.stringify(currentMonsterPos));
                insertObjects();
              } else {
                console.log('Ouïlle');
              }
            } else {
              if ((currentMonsterPos.y - 1) < gameSize.y -1) { //va en bas
                $('.gameDiv[data-x="' + currentMonsterPos.x + '"][data-y="' + currentMonsterPos.y + '"]').html('');
                currentMonsterPos.y += 1;
                $('.gameDiv[data-x="' + currentMonsterPos.x + '"][data-y="' + currentMonsterPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./slenderdoom.png">');
                checkVictory(currentMonsterPos);
                localStorage.setItem('monsterPos', JSON.stringify(currentMonsterPos));
                insertObjects();
              } else {
                console.log('Ouïlle');
              }
            }
          } else {
            if(getRandNumber(2) == 1) { //va à droite
              if ((currentMonsterPos.x - 1) < gameSize.x - 1) {
                $('.gameDiv[data-x="' + currentMonsterPos.x + '"][data-y="' + currentMonsterPos.y + '"]').html('');
                currentMonsterPos.x += 1;
                $('.gameDiv[data-x="' + currentMonsterPos.x + '"][data-y="' + currentMonsterPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./slenderdoom.png">');
                checkVictory(currentMonsterPos);
                localStorage.setItem('monsterPos', JSON.stringify(currentMonsterPos));
                insertObjects();
              } else {
                console.log('Ouïlle');
              }
            } else {
              if ((currentMonsterPos.x - 1) > 0) { //va à gauche
                $('.gameDiv[data-x="' + currentMonsterPos.x + '"][data-y="' + currentMonsterPos.y + '"]').html('');
                currentMonsterPos.x -= 1;
                $('.gameDiv[data-x="' + currentMonsterPos.x + '"][data-y="' + currentMonsterPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./slenderdoom.png">');
                checkVictory(currentPlayerPos);
                localStorage.setItem('monsterPos', JSON.stringify(currentMonsterPos));
                insertObjects();
              } else {
                console.log('Ouïlle');
              }
            }
          };
          //debugger;
  };
  function checkDefeat() {
          alert(Yolo);
  };
  function generateGame() {
          var baseX = JSON.parse(localStorage.getItem('gameAxes')).x;
          var baseY = JSON.parse(localStorage.getItem('gameAxes')).y;
          var playScreen = $('section[data-state="playScreen"]');
          var html = '<div class="gameContainer">'; //style="width: ' + baseX*taillecases + 'px"
          for (var y = 1; y <= baseY; y++) {
            for (var x = 1; x <= baseX; x++) {
              html+= '<div data-x="' + x + '" data-y="' + y + '" class="gameDiv"></div>';
            };
          };
          html+= '</div>';
          $('.gameScreens').css('width', '' + baseX*taillecases + 'px');
          $('.gameScreens').css('height', '' + baseY*taillecases + 'px');
          $(playScreen).html(html);
          insertObjects();
          //alert('yolo');
          //debugger;
  }

//debugger;
  $('button[data-action="startGame"]').on('click', function () {
          var baseX = $('input[name="x"]').val();
          var baseY = $('input[name="y"]').val();
          if (baseX == ""|| baseY == "" ) {
            alert('Damn you fool !');
          } else {
            var axes = {
              "x" : baseX,
              "y" : baseY
            };
            localStorage.setItem('gameAxes', JSON.stringify(axes));
            localStorage.setItem('gameState', "playScreen");
            displayScreen(localStorage.getItem('gameState'));
            //debugger;
          };
          generateGame();
          //debugger;
          //debugger;
  });
  $('button[data-action="reset"]').on('click', function () {
          localStorage.clear();
          location.reload();
          $('.gameScreens').css('width','918px');
          $('.gameScreens').css('height','632px');
          //debugger;
  });
  init();
  //debugger;
  //displayScreen();
});
