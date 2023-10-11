<?php

$conexion = mysqli_connect ("localhost", "root", "", "proyecto");

$user = $_POST['user'];
$root = -10;

function encriptar ($password, $root){
    for ($i = 0; $i < strlen ($password); $i++){
        $password[$i] = chr (ord ($password[$i]) + $root);
}
return $password;
}



$conexion->query("SET NAMES 'utf8'");

if (!$conexion){
    echo json_encode("error");

    return;
} 

  $consulta = mysqli_query ($conexion, "SELECT * FROM usuarios where user = '$user'");

    $rows= array();

    while($r = $consulta->fetch_object()) {
    array_push($rows, $r);
}

 $objeto = $rows[0];


 $datos = array($objeto->user, $objeto->password =  encriptar($objeto->password, $root)) ;

 

$mysql_json = json_encode($objeto, 128);

echo $mysql_json

?>