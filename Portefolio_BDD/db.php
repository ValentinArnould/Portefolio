<?php
session_start();
function connect(){
  $link = mysqli_connect('localhost', 'root', '0000', 'dwm8', 3306);
  mysqli_set_charset($link, 'utf8');
  return $link;
}

function checkLogin($email, $password) {
  $email = clean($email);
  $password = cryptThis($password);

  $link = connect();
  $result = mysqli_query($link,
    "SELECT `id` FROM `user`
     WHERE `email` = '$email'
     AND `password` = '$password'
     LIMIT 1;"
    );
    //var_dump($link);
    //echo "<br>";
    //var_dump($result);

  if(!$result) {
    var_dump('Aucun résultat');
  } else {
    $fetch = mysqli_fetch_row($result);
    var_dump('Connect', $fetch);
    return $fetch;
  }
}

function cryptThis($var){
  $salt = 'CoucouMaPuce';
  return md5($var . $salt);
}

function clean($var){
  #return filter_var($var, "full_special_chars");
  return htmlspecialchars($var);
}
 ?>
