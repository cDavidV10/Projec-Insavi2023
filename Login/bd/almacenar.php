<?php


$conexion = mysqli_connect ("localhost", "root", "", "proyecto");

$user = $_POST["name"];
$password = $_POST["password"];
$root = 10;

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


  $almacenar = "INSERT INTO usuarios (user, password) values ('$user', '$password')";


  if (mysqli_query ($conexion, $almacenar) ){
    echo json_encode('exito',);

    return;
}

    echo json_encode('fallo');



?>
