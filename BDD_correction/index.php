<?php
  session_start();
  
  if(isset($_SESSION['user']) && !empty($_SESSION['user'])) {
    require_once 'admin.php';
  } else {
    require_once 'form_login.php';
  }
