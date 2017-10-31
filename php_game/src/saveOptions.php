<?php
  session_start();
  unset($_SESSION['phpGame']);
  $options = array(
    "gameName" => $_GET['gameName'],
    "axes" => array(
      "x" => $_GET['x'],
      "y" => $_GET['y'],),
    "victory" => array(
      "x" => rand(2, $_GET['x']),
      "y" => rand(1, $_GET['y']),
      "image" => "diamond.png",)
  );
  $_SESSION['phpGame'] = $options;
  header('Location: ../index.php');
 ?>
