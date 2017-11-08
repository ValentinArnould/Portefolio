<?php
  require_once 'validate_register.php';
  if(isset($_POST['submit'])) {
    $errors = validateRegister();
  }
?>
<form action="" method="POST">
  <label for="firstname">Prenom</label>
  <input id="firstname" type="text" name="firstname">
  <br>
  <label for="lastname">Nom</label>
  <input id="lastname" type="text" name="lastname">
  <br>
  <label for="email">Email</label>
  <input id="email" type="text" value='<?= (isset($_POST["email"]))? $_POST["email"]: ""?>' name="email">
  <br>
  <?php //if(isset($errors['email'])){ echo $errors['email']; }?>
  <?= (isset($errors['email']))? $errors['email'] . "<br>": "" ?>
  <label for="password">Password</label>
  <input id="password" type="password" name="password">
  <br>
  <label for="repassword">Re-Password</label>
  <input id="repassword" type="password" name="repassword">
  <br>

  <input name="submit" type="submit">
</form>
