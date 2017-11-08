<?php
  require_once 'validate_Register.php';
  if (isset($_POST['submit'])) {
    $errors = validateRegister();
    var_dump($_POST);
  }
 ?>

<form action="" method="POST">

  <label for="firstname">Prénom</label>
  <input id="firstname" type="text" name="firstname">
  <br>
  <label for="lastname">Nom</label>
  <input id="lastname" type="text" name="lastname">
  <br>
  <label for="email">Email</label>
  <input id="email" type="text" name="email">
  <br>
  <?php if (isset($errors['email'])) {
    echo $errors['email'];
    echo '<br>';
  } ?>
  <label for="password">Password</label>
  <input id="password" type="text" name="password">
  <br>
  <?php if (isset($errors['password'])) {
    echo $errors['password'];
    echo '<br>';
  } ?>
  <label for="repassword">Re-Password</label>
  <input id="repassword" type="text" name="repassword">
  <br>
  <input class="btn" type="submit" name="submit" value="yolo">
</form>
