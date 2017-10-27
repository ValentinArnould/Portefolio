<?php
  $int = 10;
  $float = 1.2;
  $string = "Ceci est un doom";
  $array = array("clé" => "valeur");
  $bool = TRUE;
  $null = NULL;
  testTypelourd($string);

  function testType ($var)
  {
    $result = gettype($var);
    echo("cette variable est de type " . $result);
  }

  function testTypelourd ($var)
  {
    $result = $var['type'];
    echo("cette variable est de type " . $result);
  }
