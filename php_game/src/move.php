<?php
  session_start();
  /*var_dump($_SESSION['posPlayer']);
  echo "<br>";
  var_dump($_SESSION['phpGame']);
  echo "<br>";
  var_dump($_POST); die;*/

  if ($_POST['direction'] == 'up') {
    if (($_SESSION['posPlayer']['y'] - 1) > 0 ) {
      $_SESSION['posPlayer']['y']--;
      header('Location: ../game.php');
    } else {
      //var_dump('Impossibreuh haut');
      header('Location: ../game.php');
    }
  } elseif ($_POST['direction'] == 'down') {
    if (($_SESSION['posPlayer']['y'] + 1) <= $_SESSION['phpGame']['axes']['y'] ) {
      $_SESSION['posPlayer']['y']++;
      header('Location: ../game.php');
    } else {
      //var_dump('Impossibreuh bas');
      header('Location: ../game.php');
    }

  } elseif ($_POST['direction'] == 'left') {
    if (($_SESSION['posPlayer']['x'] - 1) > 0 ) {
      $_SESSION['posPlayer']['x']--;
      header('Location: ../game.php');
    } else {
      //var_dump('Impossibreuh gauche');
      header('Location: ../game.php');
    }

  } elseif ($_POST['direction'] == 'right') {
    if (($_SESSION['posPlayer']['x'] + 1) <= $_SESSION['phpGame']['axes']['x'] ) {
      $_SESSION['posPlayer']['x']++;
      header('Location: ../game.php');
    } else {
      //var_dump('Impossibreuh droite');
      header('Location: ../game.php');
    }

  }

  if ($_SESSION['phpGame']['victory']['x'] == $_SESSION['posPlayer']['x'] && $_SESSION['phpGame']['victory']['y'] == $_SESSION['posPlayer']['y']) {
    $_SESSION['phpGame']['victory']['x'] = rand(2,$_SESSION['phpGame']['axes']['x']);
    $_SESSION['phpGame']['victory']['y'] = rand(2,$_SESSION['phpGame']['axes']['y']);
  }
 ?>
