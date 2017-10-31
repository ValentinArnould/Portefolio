<?php
  session_start();
  if (isset($_SESSION['phpGame'])) {
    header('Location: game.php');
  } else {
    header('Location: launchOptions.php');
  }
