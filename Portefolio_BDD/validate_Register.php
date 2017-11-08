<?php
/**
* Vérifie la validité du formulaire register
* @return array | bool
*/
function validateRegister() {
  $errors = [];
  $valid = validateEmail($_POST['email']);
  if (is_array($valid)) {
    array_merge($errors, $valid);
  }
  return $errors;
}

function validatePassword($password) {
  $errors = array();
  if (strlen($password) < 5) {
    $errors['password']['invalidLength'] = "Mot de passe trop petit";
  }
    if (!preg_match('/[[:digit:]]/', $password)) {
      $errors['password']['invalidDigit'] = "Problème chiffres";
    }
    if (!preg_match('/[[:alpha:]]/', $password)) {
      $errors['password']['invalidAlpha'] = "Problèmes lettres";
    }
    if (strtolower($password) == $password) {
      $errors['password']['invalidUpper'] = "Ne contient pas de Majuscules";
    }
    $specialNope = ["&","@","#","[","]","*"];
    if (str_replace($specialNope,"_",$password) != $password) {
      $errors['password']['invalidSpecial'] = "Caractères non autorisés " . join($specialNope);
    }

  return (empty($errors))? true : $errors;
}




/**
* vérifie la validité  d'une chaîne de caractère
* @var $str la chaîne de caractère analysée
* @return array | bool
*/
function validateEmail($email) {
  $errors = array();

  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = "Email invalide";
  /*
  if (empty($errors)) {
    return true;
  }
  return $errors;

  if (empty($errors)) {
    return true;
  } else {
    return $errors;

  }*/

  }
  return (empty($errors))? true : $errors;
}
 ?>
