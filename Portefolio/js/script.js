$(document).ready(function() {
  console.log('on');

  $('.bigimage').css('opacity','1');
  /* From Modernizr */
  var e = document.getElementsByClassName('bigimage')[0];
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
  var transitionEvent = whichTransitionEvent();
  transitionEvent && e.addEventListener(transitionEvent, function() {
	   console.log('hehe');
     $('.titres').css('left','100%');
     $('.titres').css('opacity','1');
  });


  $('.main_menu').hover(function() {
    $('.main_menu').css('overflow','visible')
    $('.develop').css('opacity','1')
    $('.develop').css('right','100px')
  },function() {
    $('.develop').css('opacity','0')
    $('.develop').css('right','-100px')
    $('.main_menu').css('overflow','hidden')
  });

})
