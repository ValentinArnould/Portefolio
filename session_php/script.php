
<?php
  session_start();
  if ($_POST['yolo'] == 'delete') {
    unset($_SESSION['directions']);
    $_SESSION['directions'] = " ";
  }
  if (!isset($_SESSION['directions'])) {

    $_SESSION['directions'] = $_POST['direction'];

  } else {
    $_SESSION['directions'] .= $_POST['direction'];
  }
  header('Location: /');







  var_dump($_SESSION['directions']); die;
 ?>
