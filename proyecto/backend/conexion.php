<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","","mateikos");
  return $con;
}
?>