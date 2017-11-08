$(document).ready(function() {
  console.log('on');

  $('.bigimage').css('opacity','1');
  transend('bigimage',anime);

  $('.main_menu').hover(function() {
    $('.main_menu').css('overflow','visible')
    $('.develop').css('opacity','1')
    $('.develop').css('right','100px')
  },function() {
    $('.develop').css('opacity','0')
    $('.develop').css('right','-100px')
    $('.main_menu').css('overflow','hidden')
  });

function anime() {
  var cont = [".secteur",".interets",".qualites"];
  function letimeout(i) {
    var doom = (1000*(1 + i));
    setTimeout(function() {
     $('' + cont[i] + '').css('opacity','1');
     $('' + cont[i] + '').css('top','0%');
     debugger;
    }, doom);
    /*$('' + cont[i] + '').animate({
      opacity: 1,
    top: "+=100",
  }, doom, function() {
    // Animation complete.
  });*/
  }

  $('.titres').css('left','100%');
  $('.titres').css('opacity','1');
  //debugger;
  for (var i = 0; i < 3; i++) {
    letimeout(i);
    //$('' + cont[i] + '').delay(doom).css('left','100%');
    //debugger;
  };
}

function transend(classe,fonction) {
  /* From Modernizr */
  var e1 = document.getElementsByClassName(classe)[0];
  function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd' }

    for(t in transitions){
      if( el.style[t] !== undefined ){
        return transitions[t];
      };
    };
  };
  /* Listen for a transition! */
  var transitionEvent = whichTransitionEvent();
  //debugger;
  transitionEvent && e1.addEventListener(transitionEvent, function() {
	   console.log('hehe');
     fonction();
  });
};







});
