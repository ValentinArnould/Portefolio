$(document).ready(function() {
  console.log('on');

  $('.bigimage').css('opacity','1');

  $('.main_menu').hover(function() {
    $('.main_menu').css('overflow','visible')
    $('.develop').css('opacity','1')
    $('.develop').css('right','100px')
  },function() {
    $('.develop').css('opacity','0')
    $('.develop').css('right','-100px')
    $('.main_menu').css('overflow','hidden')
  });

  /* From Modernizr */
  var e1 = document.getElementsByClassName('bigimage')[0];

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
        return transitions[t]; } } }
  /* Listen for a transition! */
  var cont = [".secteur",".interets",".qualites"];
  var transitionEvent = whichTransitionEvent();
  transitionEvent && e1.addEventListener(transitionEvent, function() {
	   console.log('hehe');
     $('.titres').css('left','100%');
     $('.titres').css('opacity','1');
     for (var i = 0;i < 3; i++) {
       setTimeout(function() { 
         $(cont[i]).css('opacity','1');
         $(cont[i]).css('left','100%')
       }, (500*(1 + i)));
     }
  });








})
