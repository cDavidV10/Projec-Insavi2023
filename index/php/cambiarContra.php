<?php


$conexion = mysqli_connect ("localhost", "root", "", "proyecto");

$newPassword = $_POST['newpassword'];
$confirmPassword = $_POST['confirmpassword'];
$user = $_POST['user'];
$root = 10;

function encriptar ($password, $root){
    for ($i = 0; $i < strlen ($password); $i++){
        $password[$i] = chr (ord ($password[$i]) + $root);
}
return $password;
}

$newPassword = encriptar($newPassword, $root);
$confirmPassword = encriptar($confirmPassword, $root);

$conexion->query("SET NAMES 'utf8'");

if (!$conexion){
    echo json_encode("error");

    return;
} 

 if ($newPassword == $confirmPassword) {
        // Actualiza la contraseña en la base de datos
        $sql = "UPDATE usuarios SET password = '$newPassword' WHERE user = '$user'";
        if ($conexion->query($sql) === TRUE) {
            echo json_encode("exito");
        } else {
            echo "Error al actualizar la contraseña: " . $conn->error;
        }
    } else {
        echo json_encode("error");
    }


?>