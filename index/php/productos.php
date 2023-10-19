<?php

$categoria = $_POST['categoria'];
$codigo = $_POST['codigo'];
$nombre = $_POST['nombre'];
$descripcion = $_POST['descripcion'];
$precio = $_POST['precio'];
$stock = $_POST['stocks'];


$conexion = new mysqli("localhost", "root", "", "proyecto");

if(!$conexion){
    echo "No hay conexion";
    return;
}

$select = "SELECT id FROM categoria where nombre = '$categoria'";

$resultado = mysqli_query($conexion, $select);

if(!$resultado){
    echo json_encode("nos existe la categoria");

    return;
}

   $rows= array();

    while($r = $resultado->fetch_object()) {
    array_push($rows, $r);
    }

  $categoria = $rows[0]->id;
    

    $sql =mysqli_query ($conexion,"INSERT INTO producto (codigo, nombre, descripcion, precio, stock, idcategoria)
             VALUE ('$codigo', '$nombre', '$descripcion', '$precio', '$stock', '$categoria') ");


    if (!$sql){
        echo json_encode( "error");
    }
    else{
        echo json_encode( "exito");
    }
?>