<?php             //finir platum avec les cases grises et compteur et pathfinder
  session_start();
  //var_dump($_SESSION['phpGame']);
  $taille = 50*$_SESSION['phpGame']['axes']['x'];

  function displayCase($x, $y)
  {
    echo "<div style='border:0px solid orange;
    width:50px; height:50px;background-color: orange;'></div>";
    //<span style='font-size:6px;'>" . $y . " " . $x . "</span>
  }

  function displayPlayer($x, $y)
  {
    echo "<div style='border:0px solid black;
    width:50px; height:50px;background-color: orange;'>
    <img src='./src/TrollFace.png' style='width:100%;background-color:orange'>
    </div>";
    //<span style='font-size:6px;background-color:red;color:white;'>" . $y . " " . $x . "</span>
  }

  function displayCoin($x, $y)
  {
    echo "<div style='border:0px solid black;
    width:50px; height:50px;background-color: orange;'>
    <img style='width:100%' src='./src/Diamond.png'>
    </div>";
  }
 ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title><?php echo $_SESSION['phpGame']['gameName'] ?></title><!--donne le tiree de la partie -->
  </head>
  <body>
    <div style="display:flex;width:<?php echo $taille ?>px;flex-wrap:wrap;"> <!--donne une structure flex-->
    <?php
      for ($y=1; $y <= $_SESSION['phpGame']['axes']['y']; $y++) { //on crée un tableau x et y
        for ($x=1; $x <= $_SESSION['phpGame']['axes']['x']; $x++) {
          if(!isset($_SESSION['posPlayer'])) { //si la pos du joueur n'est pas définie
            if($y == 1 && $x == 1) {           //et que on est à l'init de la première case
              $_SESSION['posPlayer'] = array(  //on définit la pos du joueur sur la 1ère case
                "x" => $x,
                "y" => $y,
              );            //puis on crée la case dans laquelle il est
              displayPlayer($x,$y);
            } else {        //sinon on crée une case vide
              displayCase($x, $y);
            }               //si le joueur est défini sur cette case, crée sa case
          } else if($y == $_SESSION['posPlayer']['y'] && $x == $_SESSION['posPlayer']['x']) {
            displayPlayer($x, $y);
          } else if($x == $_SESSION['phpGame']['victory']['x'] && $y == $_SESSION['phpGame']['victory']['y']) {
            displayCoin($x, $y);
          } else {          //sinon crée une case vide
            displayCase($x, $y);
          }
        }
      }
     ?>
   </div>
     <div style="display:flex;width: auto;flex-wrap:wrap;">
     <form action="./src/reset.php" style="width:100px;height:100px;"> <!-- bouton qui détruit la session de jeu -->
       <input type="hidden" value="on">
       <input type="submit" value="reset" style="width:100px;height:100px;font-size:50pt">
     </form>
     <form action="./src/move.php" method="post" style="width:100px;height:100px;">
       <input type="hidden" name="direction" value="up">
       <input type="submit" value="&#8593;" style="width:100px;height:100px;font-size:50pt">
     </form>
     <form action="./src/move.php" method="post" style="width:100px;height:100px;">
       <input type="hidden" name="direction" value="down">
       <input type="submit" value="&#8595;" style="width:100px;height:100px;font-size:50pt">
     </form>
     <form action="./src/move.php" method="post" style="width:100px;height:100px;">
       <input type="hidden" name="direction" value="left">
       <input type="submit" value="&#8592;" style="width:100px;height:100px;font-size:50pt">
     </form>
     <form action="./src/move.php" method="post" style="width:100px;height:100px;">
       <input type="hidden" name="direction" value="right">
       <input type="submit" value="&#8594;" style="width:100px;height:100px;font-size:50pt">
     </form>
   </div>
  </body>
</html>
