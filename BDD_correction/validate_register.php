<?php
/**
 * Vérifie la validité du formulaire Register
 * @return array | bool
 */
function validateRegister(){
  $errors = [];
  $valid = validateEmail($_POST['email']);
  if(is_array($valid)){
    $errors = array_merge($errors, $valid);
  }
  $valid = validatePassword($_POST['password']);
  if(is_array($valid)){
    $errors = array_merge($errors, $valid);
  }
  return $errors;
}

/**
 * Vérifie la validité d'un password
 * @var $password Password à valider
 * @return array | bool
 */
function validatePassword($password){
  $errors = array();

  if(strlen($password) < 5) {
    $errors['password']['invalidLenght'] = "Mot de passe inférieur à 5 caractère...";
  }

  if(!preg_match('/[[:digit:]]/', $password)) {
    $errors['password']['invalidDigit'] = "Mot de passe ne contenant pas de numérique...";
  }

  if(!preg_match('/[a-zA-Z]/', $password)) {
    $errors['password']['invalidAlpha'] = "Mot de passe ne contenant pas de lettre alphabet...";
  }

  if(strtolower($password) == $password) {
    $errors['password']['invalidUpper'] = "Mot de passe ne contenant pas de Majuscule";
  }

  $specialAllow = ["&", "@", "#", "[", "]", "*", "%"];
  if(str_replace($specialAllow, "_", $password) == $password) {
    $errors['password']['invalidSpecial'] = "Mot de passe ne contenant pas un caractère spécial comme " . join($specialAllow);
  }

  return (empty($errors))? true : $errors;
}

/**
 * Vérifie la validité d'un email
 * @var $email Email à valider
 * @return array | bool
 */
function validateEmail($email){
  $errors = array();

  if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    $errors['email'] = "Email invalide";
  }

  /*
  //Autre version d'écriture...
    if(empty($errors))
      $errors = true;

    return $errors;

    if(empty($errors))
      return true;
    else
      return $errors;
  */

  return (empty($errors))? true : $errors;
}
