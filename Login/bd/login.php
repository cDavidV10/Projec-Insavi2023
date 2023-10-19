<?php

session_start();

$conexion = mysqli_connect ("localhost", "root", "", "proyecto");

$user = $_POST["name"];
$password = $_POST["password"];
$root = 10;

$_SESSION['usuario'] = $user;

if (!$conexion){
    echo json_encode("error");

    return;
}

function encriptar ($password, $root){
    for ($i = 0; $i < strlen ($password); $i++){
        $password[$i] = chr (ord ($password[$i]) + $root);
}
return $password;
}

$password = encriptar($password, $root); 

if ($user === "Administrator"){
    $consulta = mysqli_query ($conexion, "SELECT * FROM usuarios WHERE user = '".$user."' and  password = '".$password."'");
    $nr = mysqli_num_rows ($consulta);

if ($nr == 1){
   echo json_encode("admin");
}

return;
}

$consulta = mysqli_query ($conexion, "SELECT * FROM usuarios WHERE user = '".$user."' and  password = '".$password."'");
$nr = mysqli_num_rows ($consulta);


if ($nr == 1){
   echo json_encode("exito");
}


?>