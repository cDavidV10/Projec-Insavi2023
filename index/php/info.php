<?php

$conexion = mysqli_connect ("localhost", "root", "", "proyecto");

// $user = $_POST['user'];
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

  $consulta = mysqli_query ($conexion, "SELECT * FROM usuarios");



    $rows= array();

    while($r = $consulta->fetch_object()) {
    array_push($rows, $r);
}

foreach ($rows as $objeto) {
    $datos[] = array("user" => $objeto->user, "password" => encriptar($objeto->password, $root));
}

$mysql_json = json_encode($datos, JSON_UNESCAPED_UNICODE);

echo $mysql_json;

?>