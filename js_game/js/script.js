$(document).ready(function () {
  //debugger;
  var taillecases = 60; //changer dans le css taille cases et taille border
  if (localStorage.getItem('gameState') == 'playScreen') {
    //$('.gameScreens').css('width','918px');
    //$('.gameScreens').css('height','632px');
  }
  function init() {
    if (localStorage.getItem('gameState') == null) {
      //debugger;
      localStorage.setItem('gameState', 'optionScreen');
      displayScreen(localStorage.getItem('gameState'));
    } else {
      displayScreen(localStorage.getItem('gameState'));
    }
  }
  function displayScreen(gameState) {
    $.each($('section[data-state!="' + gameState + '"]'), function(key, value) {
      $(this).addClass('hidden');
    })
    $('section[data-state="' + gameState + '"]').removeClass('hidden');
    //debugger;
  }
  function insertObjects() {
    if (localStorage.getItem('playerPos') == null) {
      var pos = {
        "x" : 1,
        "y" : 1
      };
      localStorage.setItem('playerPos', JSON.stringify(pos));
    };
    if (localStorage.getItem('goalPos') == null) {
      var pos = {
        "x" : JSON.parse(localStorage.getItem('gameAxes')).x,
        "y" : JSON.parse(localStorage.getItem('gameAxes')).y
      };
      localStorage.setItem('goalPos', JSON.stringify(pos));
      //debugger;
    };
    //ajouter slenderdoom

    var playerPos = JSON.parse(localStorage.getItem('playerPos'));
    var goalPos = JSON.parse(localStorage.getItem('goalPos'));
    $('.gameDiv[data-x="' + playerPos.x + '"][data-y="' + playerPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./pokerface.png">');
    $('.gameDiv[data-x="' + goalPos.x + '"][data-y="' + goalPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./Emerald.png">');
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

    });
    //ajouter slenderdoom
    //debugger;
  }

  function checkVictory(currentPlayerPos) {
    if (currentPlayerPos.x == JSON.parse(localStorage.getItem('goalPos')).x && currentPlayerPos.y == JSON.parse(localStorage.getItem('goalPos')).y) {
      displayScreen('victory');
      //debugger;
    }
  }

  function movePlayer(direction) {
    var currentPlayerPos = JSON.parse(localStorage.getItem('playerPos'));
    var gameSize = JSON.parse(localStorage.getItem('gameAxes'));
    if (direction == 'up') {
      if ((currentPlayerPos.y - 1) > 0) {
        $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + currentPlayerPos.y + '"]').html('');
        currentPlayerPos.y -= 1;
        $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + currentPlayerPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./pokerface.png">');
        checkVictory(currentPlayerPos);
        localStorage.setItem('playerPos', JSON.stringify(currentPlayerPos));
      } else {
        console.log('Aïe');
      }
    } else if (direction == 'down') {
      if ((currentPlayerPos.y - 1) < gameSize.y -1) {
        $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + currentPlayerPos.y + '"]').html('');
        currentPlayerPos.y += 1;
        $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + currentPlayerPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./pokerface.png">');
        checkVictory(currentPlayerPos);
        localStorage.setItem('playerPos', JSON.stringify(currentPlayerPos));
      } else {
        console.log('Aïe');
      }
    } else if (direction == 'left') {
      if ((currentPlayerPos.x - 1) > 0) {
        $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + currentPlayerPos.y + '"]').html('');
        currentPlayerPos.x -= 1;
        $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + currentPlayerPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./pokerface.png">');
        checkVictory(currentPlayerPos);
        localStorage.setItem('playerPos', JSON.stringify(currentPlayerPos));
      } else {
        console.log('Aïe');
      }
    } else if (direction == 'right') {
      if ((currentPlayerPos.x - 1) < gameSize.x - 1) {
        $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + currentPlayerPos.y + '"]').html('');
        currentPlayerPos.x += 1;
        $('.gameDiv[data-x="' + currentPlayerPos.x + '"][data-y="' + currentPlayerPos.y + '"]').html('<img style="  width: 100%; height: 100%" src="./pokerface.png">');
        checkVictory(currentPlayerPos);
        localStorage.setItem('playerPos', JSON.stringify(currentPlayerPos));
      } else {
        console.log('Aïe');
      }
    }
    //debugger;
  }

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
    }
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
})
