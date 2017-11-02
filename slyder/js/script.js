$(document).ready(function() {

  var image = [
    "./elements/doom1.jpg",
    "./elements/doom2.jpg",
    "./elements/doom3.jpg" //ajouter avec append et prepend
  ];
  //debugger;

function disposition() { //organise les images selon celle affichée
  var index = JSON.parse(localStorage.getItem('indexImg'));

}

function depart() {
  if(localStorage.getItem('indexImg') == null) {
    debugger;
    localStorage.setItem('indexImg', JSON.stringify(image.indexOf(image[0])));
    /*var index = JSON.parse(localStorage.getItem('indexImg'));
    var html = '<img class="image i_' + index + '" src="' + image[index] + '" alt="img slide ' + index + '">'
    $('.centre').append(html);*/
    //debugger;
    disposition();
  } else {
    /*var index = JSON.parse(localStorage.getItem('indexImg'));
    var html = '<img class="image i_' + index + '" src="' + image[index] + '" alt="img slide ' + index + '">'
    $('.centre').append(html);*/
    disposition();
  }
  $.each(image, function(index, value) {

  });
};
  depart();
});
