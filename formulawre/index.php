<?php
  $documentState = file_exists('./pages' . $_GET['Monpage']. '.html');
  require_once('./head.html');
  if($documentState) {
    require_once('./' . $_GET['Monpage'] . '.html');
  }
  else {
    require_once('./404.html');
  }
  require_once('./footer.html');
?>
