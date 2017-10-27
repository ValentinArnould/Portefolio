<?php
  /*$mondamn = ucfirst($_GET['yolo']);
  $mydoom = $_GET['mondoom'];
  $currentdate = date("Y");
  echo "You are " . $mondamn ." et che tu es " . $currentdate ." années";
  //var_dump($_GET);*/
  $nom = $_GET['nom'];
  $jour = $_GET['jour'];
  $mois = $_GET['mois'];
  $annee = $_GET['année'];
/*/^[0-9]{1,2}$;
  /^[0-9]{4}$;*/
  $vannee = date("Y") - $annee;

  if( date("m") < $mois)
  {
    $vmois = (date("m") + 12) - $mois;
    $vannee = $vannee - 1;
  }
  else {
    $vmois = date("m") - $mois;
  }
  if( date("d") < $jour)
  {
    $vjour = (date("j") + 31) - $jour;
    $vmois = $vmois - 1;
    if($vmois < 0)
    {
      $vmois = $vmois + 12;
      $vannee = $vannee - 1;
    }
  }
  else {
    $vjour = date("d") - $jour;
  }

  echo "yolo ".$nom." tu as ".$vannee." ans, " .$vmois. " mois, et " .$vjour. " jours";
  die;






































?>
