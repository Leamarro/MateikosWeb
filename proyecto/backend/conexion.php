<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","lmarrocchi","mateikos");
  return $con;
}
?>