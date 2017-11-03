$(document).ready(function() {

  var image = [
    "./elements/doom1.jpg",
    "./elements/doom2.jpg",
    "./elements/doom3.jpg",
    "./elements/doom4.jpg",
    "./elements/doom5.jpg",
    "./elements/doom6.jpg",
    "./elements/doom7.jpg" //ajouter avec append et prepend
  ];
  //debugger;
  localStorage.setItem('nbrImg', JSON.stringify(image.length));

function disposition() { //organise les images selon celle affichée
  var index = JSON.parse(localStorage.getItem('indexImg'));
  var maxImg = JSON.parse(localStorage.getItem('nbrImg'));
  var html = "";
  //debugger;
  if(index <= 0) {

    //debugger;
    html = '<img class="image i_' + index + '" src="' + image[index] + '" alt="img slide ' + index + '">';
    $('.centre').html(html);
    $('.i_' + index + '').css('left','0%'); //milieu
    html = '<img class="image i_' + (index + (maxImg - 1)) + '" src="' + image[(index + (maxImg - 1))] + '" alt="img slide ' + (index + (maxImg - 1)) + '">';
    $('.centre').prepend(html);
    $('.i_' + (index + (maxImg - 1)) + '').css('left','-100%');//gauche
    html = '<img class="image i_' + (index + 1) + '" src="' + image[(index + 1)] + '" alt="img slide ' + (index + 1) + '">';
    $('.centre').append(html);
    $('.i_' + (index + 1) + '').css('left','100%');//droite
  }else if(index >= (image.length - 1)) {
    html = '<img class="image i_' + index + '" src="' + image[index] + '" alt="img slide ' + index + '">';
    $('.centre').html(html);
    $('.i_' + index + '').css('left','0%');//milieu
    html = '<img class="image i_' + (index - 1) + '" src="' + image[(index - 1)] + '" alt="img slide ' + (index - 1) + '">';
    $('.centre').prepend(html);
    $('.i_' + (index - 1) + '').css('left','-100%');//gauche
    html = '<img class="image i_' + 0 + '" src="' + image[0] + '" alt="img slide ' + 0 + '">';
    $('.centre').append(html);
    $('.i_' + 0 + '').css('left','100%');//droite
  } else {

    html = '<img class="image i_' + index + '" src="' + image[index] + '" alt="img slide ' + index + '">';
    $('.centre').html(html);
    $('.i_' + index + '').css('left','0%');//milieu
    html = '<img class="image i_' + (index - 1) + '" src="' + image[(index - 1)] + '" alt="img slide ' + (index - 1) + '">';
    $('.centre').prepend(html);
    $('.i_' + (index - 1) + '').css('left','-100%');//gauche
    html = '<img class="image i_' + (index + 1) + '" src="' + image[(index + 1)] + '" alt="img slide ' + (index + 1) + '">';
    $('.centre').append(html);
    $('.i_' + (index + 1) + '').css('left','100%');//droite
  }
}

function transitionGauche() {
  var index = JSON.parse(localStorage.getItem('indexImg'));
  var maxImg = JSON.parse(localStorage.getItem('nbrImg'));
  //$('.i_' + (index - 1) + '').remove();
  $('.i_' + index + '').css('left','-100%');//gauche
  if (index >= maxImg - 1) {
    $('.i_' + 0 + '').css('left','0%');//milieu
  } else {
    $('.i_' + (index + 1) + '').css('left','0%');//milieu
  }
  //debugger;
}

function transitionDroite() {
  var index = JSON.parse(localStorage.getItem('indexImg'));
  var maxImg = JSON.parse(localStorage.getItem('nbrImg'));
  //$('.i_' + (index + 1) + '').remove();
  $('.i_' + index + '').css('left','100%');//droite
  if (index <= 0) {
    $('.i_' + (index + (maxImg - 1)) + '').css('left','0%');//milieu
  } else {
    $('.i_' + (index - 1) + '').css('left','0%');//milieu
  }
  //debugger;
}

function depart() {
  if(localStorage.getItem('indexImg') == null) {
    localStorage.setItem('indexImg', JSON.stringify(image.indexOf(image[0])));
    disposition();
  } else {

    disposition();
  }
};

  depart();
  $('#left').on('click', function() {
    var index = JSON.parse(localStorage.getItem('indexImg'));
    var maxImg = JSON.parse(localStorage.getItem('nbrImg'));
    var wait = 0;
    //$('.i_' + index + '').finish();
    if (index <= 0) {
      transitionDroite();
      wait = index;
      index = maxImg - 1;
    } else {
      transitionDroite();
      wait = index;
      index --;
    }
    wayt('i_' + wait + '');
    //setTimeout(function() {
    //disposition();
    //}, 1000);
    localStorage.setItem('indexImg', JSON.stringify(index));
  });

  $('#right').on('click', function() {
    var index = JSON.parse(localStorage.getItem('indexImg'));
    var maxImg = JSON.parse(localStorage.getItem('nbrImg'));
    var wait = 0;
    //$('.i_' + index + '').finish();
    if (index >= maxImg - 1) {
      transitionGauche();
      wait = index;
      index = 0;
    } else {
      transitionGauche();
      wait = index;
      index ++;
    }
    //debugger;
    wayt('i_' + wait + '');
    //setTimeout(function () {
    //  disposition();
    //}, 1000);
    localStorage.setItem('indexImg', JSON.stringify(index));
  });





function wayt(img) {
  /* From Modernizr */
  var e1 = document.getElementsByClassName(img)[0]; //$($(".img")[0])
  var once = false;
  function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd' }
      //debugger;
      for(t in transitions){
        if(el.style[t] !== undefined ){
          return transitions[t];
        }
      }
    }
    /* Listen for a transition! */
    var transitionEvent = whichTransitionEvent();
    //debugger;
    if (!once) {
      transitionEvent && e1.addEventListener(transitionEvent, function() { //e1.on('transitionEvent', function(){});
        disposition();
      });
      once = true;
    }
}

});
