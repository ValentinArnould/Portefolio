<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php session_start();
    if(isset($_SESSION['user']) && !empty($_SESSION['user'])) {
      echo "HEhe sonobiboom";
      echo "<a href='./logout.php' > Logout </a>";

      preg_match('/[a-zA-Z0-9]', "UT");
    } else {
    require_once 'form_login.php'; } ?>
  </body>
</html>
<?php /*$host = "localhost";
  $password = "0000";
  $user = "root";
  $dbname = "dwm8";
  $port = 3306;

  $res = mysqli_connect($host,$user,$password,$dbname,$port);

  //var_dump($res);

  $res = mysqli_connect($host, $user, $password, $dbname, $port);

if (!$res) {
    die('Erreur de connexion (' . mysqli_connect_errno() . ') '
            . mysqli_connect_error());
    }
    mysqli_set_charset($res, 'utf8');

    $_GET["id"] = "2 UNION SELECT * FROM user";

    $result = mysqli_query($res, 'SELECT "id", "name" FROM `task`;');
    //echo '\r\n\r\n';
    var_dump(mysqli_num_rows($result));
    var_dump(mysqli_fetch_row($result));
    echo "<br>";
    var_dump($_GET["id"]);
    //var_dump(mysqli_fetch_row($result));
    echo "<br>";
    //var_dump(mysqli_fetch_row($result));
    echo "<br>";
    //var_dump(mysqli_fetch_row($result));*/
 ?>
