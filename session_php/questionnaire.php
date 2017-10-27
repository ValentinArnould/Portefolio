<?php
session_start();
$count = 0;

$r1 = isset($_GET['q1']) ? $_GET['q1'] : false;
$r2 = isset($_GET['q2']) ? $_GET['q2'] : false;
$r3 = isset($_GET['q3']) ? $_GET['q3'] : false;
$r5 = isset($_GET['q5']) ? $_GET['q5'] : false;
if($r1 == "1"){
  $_SESSION['R1'] = "Raison rep 1";
  $count ++;
}
if($r2 == "1") {
  $count ++;
}
if($r3 == "1") {
  $count ++;
}
if(isset($_GET['q4a']) && isset($_GET['q4b']) && isset($_GET['q4d']) && !isset($_GET['q4c']))  {
  $count ++;
}
if($r5 == "iouiouiou") {
  $count ++;
}
header('Location: /');
