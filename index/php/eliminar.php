<?php


$data = file_get_contents("php://input");
$data = json_decode($data, true);

$user = $data['user'];

$conexion = mysqli_connect("localhost","root","","proyecto");

if(!$conexion){
    echo json_encode("No hay conexion");

    return;
}

  $eliminar = "DELETE FROM usuarios WHERE user = '$user'";
     if (mysqli_query($conexion, $eliminar)) {
    echo json_encode("exito");
    }else {
    echo json_encode("fallo");
    }

?>